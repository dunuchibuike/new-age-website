import React, { useState } from 'react'
import {useCart} from '../Context/CartContext'
import "../CSS/Header.css"
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useWishlist } from '../Context/WishlistContext'
import { MdOutlineShoppingCart, MdPerson, MdMenu, MdClose } from 'react-icons/md'

const NewAgeHeader = () => {
  const navigate = useNavigate()
  const { cart } = useCart()
  const { wishlist } = useWishlist()
  const [menuOpen, setMenuOpen] = useState(false)
  const goTo = (path) => {
    navigate(path)
    setMenuOpen(false)
  }
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
                <img src="/images/New age Logo.svg" alt="" />
            </div>


           <button
             className="mobile-menu-toggle"
             type="button"
             aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
             aria-expanded={menuOpen}
             onClick={() => setMenuOpen((open) => !open)}
           >
             {menuOpen ? <MdClose /> : <MdMenu />}
           </button>

           <ul className={menuOpen ? 'header-nav header-nav--open' : 'header-nav'}>
            <li
            onClick={() => goTo('/')}
            >Home</li>
            <li
            onClick={() => goTo('/Shop')}
            >Shop Products</li>
            <li
            onClick={() => goTo('/Aboutus')}
            >About Us</li>
            <li
            onClick={() => goTo('/Support')}
            >Support</li>
           </ul>


           <article className='third-header-article'>
            <button className="header-wishlist-button" type="button" onClick={() => navigate('/saved-items')} aria-label="View saved items">
              {wishlist.length ? <FaHeart size={25} /> : <FaRegHeart size={28} />}
              {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
            </button>

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
