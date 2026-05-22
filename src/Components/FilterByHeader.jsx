import React from 'react'
import { SlEqualizer } from "react-icons/sl";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Input from '../Props/Input';
import "../CSS/Header.css"
const FilterByHeader = () => {
  return (
    <>
        <section className='third-header-container'>

                <div className='third-semi-container'>
                <main className='filter-container'>
              <SlEqualizer size={28} color="#000" />
              <p>Filter By</p>
                </main>


                <div className='search-container'>
                    <Input type="text" placeholder="Type here" className="search-input"/>
                    <div className='searchiconcontainer'>
                    <IoIosSearch  size={22} className="search-icon"/>
                    </div>
                </div>


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
