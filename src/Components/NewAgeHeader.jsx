import React from 'react'
import {useCart} from '../Context/CartContext'
import "../CSS/Header.css"
import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineShoppingCart, MdPerson } from 'react-icons/md'

const NewAgeHeader = () => {
  const navigate = useNavigate()
  const { cart } = useCart()
  const handleProfileClick = () => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/Profile')
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      <main className='second-header-container'>
            <article className='second-header-article-container'>
            <div>
                <img src="/src/assets/New age Logo.svg" alt="" />
            </div>


           <ul>
            <li
            onClick={() => navigate('/')}
            >Home</li>
            <li
            onClick={() => navigate('/Shop')}
            >Shop Products</li>
            <li
            onClick={() => navigate('/Aboutus')}
            >About Us</li>
            <li
            onClick={() => navigate('/Support')}
            >Support</li>
           </ul>


           <article className='third-header-article'>
            <FaRegHeart size={28} color="#000" />

              <div className="cart-icon-wrap" onClick={() => navigate('/cart')}>
             <MdOutlineShoppingCart size={28} color="#000" />
           {cart.length > 0 && (
        <span className="cart-count">{cart.length}</span>
          )}
          </div>
            {/* <MdOutlineShoppingCart size={28} color="#000" /> */}
            
            <MdPerson 
            size={28} 
            color="#000" 
            onClick={handleProfileClick}
            style={{ cursor: 'pointer' }}
            />
            
           </article>

           </article>
        </main>
    </>
  )
}

export default NewAgeHeader
