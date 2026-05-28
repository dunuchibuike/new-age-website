import React, { useState, useEffect } from 'react'
import { FiHeart, FiShoppingCart, FiRefreshCw } from 'react-icons/fi'
import { FaWhatsapp, FaStar } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import '../CSS/ShopNow.css'

const BaseUrl = import.meta.env.VITE_BASE_URL

const ShopNow = () => {
  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const { addToCart } = useCart()

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${BaseUrl}/product/get-all-products`)
        const data = response.data
        setProducts(Array.isArray(data) ? data : data.data || data.products || data.result || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleAddToCart = (product) => {
    const token = localStorage.getItem('token')
    if (!token) {
      nav('/login')
      return
    }
    addToCart(product)
    nav('/cart')
  }

  if (loading) return <p className="pc-loading">Loading products...</p>

  return (
    <section className="sn-section">
      <div className="sn-grid">
        {products.map(product => (
          <div className="sn-card" key={product._id}>

            <div className="sn-image-box">
              <button
                className={`sn-wishlist ${wishlist.includes(product._id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product._id)}
              >
                <FiHeart />
              </button>
              <img src={product.productImage} alt={product.productName} className="sn-img" />
            </div>

            <div className="sn-info">
              <p className="sn-name">{product.productName}</p>

              <div className="sn-rating">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="sn-star" />)}
              </div>

              <p className="sn-compat-label">Category:</p>
              <div className="sn-tags">
                <span className="sn-tag">{product.productCategory}</span>
              </div>

              <div className="sn-price-row">
                <span className="sn-price">₦{Number(product.productPrice).toLocaleString()}</span>
                <span className="sn-bulk">Bulk Available</span>
              </div>

              <div className="sn-actions">
                <button className="sn-btn-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart <FiShoppingCart />
                </button>
                <button className="sn-btn-icon sn-refresh"><FiRefreshCw /></button>
                <button className="sn-btn-icon sn-whatsapp"><FaWhatsapp /></button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default ShopNow
