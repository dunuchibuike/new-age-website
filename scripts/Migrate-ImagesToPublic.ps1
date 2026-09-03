[CmdletBinding()]
param([string]$ProjectRoot)

$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($ProjectRoot)) {
  $ProjectRoot = Split-Path -Parent $PSScriptRoot
}

$sourceDirectory = Join-Path $ProjectRoot 'src/assets'
$destinationDirectory = Join-Path $ProjectRoot 'public/images'
$imageExtensions = @('.avif', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.svg', '.webp')
$sourceExtensions = @('.css', '.js', '.jsx', '.ts', '.tsx')

if (-not (Test-Path -LiteralPath $sourceDirectory -PathType Container)) {
  throw "Image source directory was not found: $sourceDirectory"
}

New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null

$assets = Get-ChildItem -LiteralPath $sourceDirectory -File | Where-Object {
  $imageExtensions -contains $_.Extension.ToLowerInvariant()
}

foreach ($asset in $assets) {
  Copy-Item -LiteralPath $asset.FullName -Destination (Join-Path $destinationDirectory $asset.Name) -Force
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$sourceFiles = Get-ChildItem -LiteralPath (Join-Path $ProjectRoot 'src') -Recurse -File | Where-Object {
  $sourceExtensions -contains $_.Extension.ToLowerInvariant()
}
$changedFiles = [System.Collections.Generic.List[string]]::new()

foreach ($file in $sourceFiles) {
  $content = [System.IO.File]::ReadAllText($file.FullName)
  $updatedContent = $content

  # Convert JavaScript/TypeScript default imports from src/assets to public URLs.
  $updatedContent = [regex]::Replace(
    $updatedContent,
    '(?m)^import\s+([A-Za-z_$][\w$]*)\s+from\s+[''\"](?:\.\.?/)+assets/([^''\"]+)[''\"];?\s*\r?\n?',
    {
      param($match)
      "const $($match.Groups[1].Value) = '/images/$($match.Groups[2].Value)'`n"
    }
  )

  # Convert JSX string paths and CSS url() references from src/assets to public URLs.
  $updatedContent = $updatedContent -replace '(?:/src/|\.\./assets/|\./assets/)', '/images/'

  if ($updatedContent -cne $content) {
    [System.IO.File]::WriteAllText($file.FullName, $updatedContent, $utf8NoBom)
    $changedFiles.Add($file.FullName)
  }
}

Write-Host "Copied $($assets.Count) image asset(s) to $destinationDirectory"
Write-Host "Updated $($changedFiles.Count) source file(s):"
$changedFiles | ForEach-Object { Write-Host " - $($_.Substring($ProjectRoot.Length + 1))" }
