import React from 'react'

import "../CSS/Header.css"

import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineShoppingCart, MdPerson } from 'react-icons/md'

const NewAgeHeader = () => {
  
  return (
    <>
      <main className='second-header-container'>
            <article className='second-header-article-container'>
            <div>
                <img src="/src/assets/New age Logo.svg" alt="" />
            </div>


           <ul>
            <li
            
            >Home</li>
            <li>Shop Products</li>
            <li>About Us</li>
            <li
         
            >Support</li>
           </ul>


           <article className='third-header-article'>
            <FaRegHeart size={28} color="#000" />
            <MdOutlineShoppingCart size={28} color="#000" />
            <MdPerson size={28} color="#000" />
            
           </article>

           </article>
        </main>
    </>
  )
}

export default NewAgeHeader
