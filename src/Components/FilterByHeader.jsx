import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SlEqualizer } from "react-icons/sl";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import "../CSS/Header.css"
const FilterByHeader = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    setSearchTerm(searchParams.get('query') || '')
  }, [searchParams])

  const handleSearch = (event) => {
    event.preventDefault()
    const query = searchTerm.trim()
    navigate(query ? `/shop?query=${encodeURIComponent(query)}` : '/shop')
  }

  return (
    <>
        <section className='third-header-container'>

                <div className='third-semi-container'>
                <main className='filter-container'>
              <SlEqualizer size={28} color="#000" />
              <p>Filter By</p>
                </main>


                <form className='search-container' onSubmit={handleSearch} role="search">
                    <input type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search products" className="search-input" aria-label="Search products" />
                    <button type="submit" className='searchiconcontainer' aria-label="Search">
                    <IoIosSearch  size={22} className="search-icon"/>
                    </button>
                </form>


                <main className='sort-container'>
                 <TbArrowsSort size={28} color="#000" />
                 <p>Sort By</p>
                 <select name="" id=""></select>
                </main>

                </div>
            </section>
    </>
  )
}

export default FilterByHeader
