import { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext()

const getWishlistKey = () => {
  try {
    const user = localStorage.getItem('user')
    if (!user || user === 'undefined') return 'wishlist_guest'
    return `wishlist_${JSON.parse(user).id}`
  } catch {
    return 'wishlist_guest'
  }
}

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(getWishlistKey())
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(getWishlistKey(), JSON.stringify(wishlist))
  }, [wishlist])

  const isSaved = (id) => wishlist.some((product) => product._id === id)

  const toggleWishlist = (product) => {
    setWishlist((current) =>
      current.some((item) => item._id === product._id)
        ? current.filter((item) => item._id !== product._id)
        : [...current, product]
    )
  }

  return (
    <WishlistContext.Provider value={{ wishlist, isSaved, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
