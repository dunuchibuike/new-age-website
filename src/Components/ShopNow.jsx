import React, { useState, useEffect } from 'react'
import { FiHeart, FiShoppingCart, FiRefreshCw } from 'react-icons/fi'
import { FaWhatsapp, FaStar } from 'react-icons/fa'
import axios from 'axios'
import '../CSS/ShopNow.css'

const BaseUrl = import.meta.env.VITE_BASE_URL

const ShopNow = () => {
  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${BaseUrl}/get-all-products`)
        console.log('response:', response) // Log the entire response object
        console.log(response.data)
        const data = response.data
        setProducts(Array.isArray(data) ? data : data.data || data.products || data.result || [])
      } catch (err) {
        console.log(err)
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

  if (loading) return <p className="pc-loading">Loading products...</p>

  return (
    <section className="pc-section">
      <div className="pc-grid">
        {products.map(product => (
          <div className="pc-card" key={product.id}>

            <button
              className={`pc-wishlist ${wishlist.includes(product.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(product.id)}
            >
              <FiHeart />
            </button>

            <div className="pc-image-box">
              <img src={product.image} alt={product.title} className="pc-img" />
            </div>

            <div className="pc-info">
              <p className="pc-name">{product.title}</p>

              <div className="pc-rating">
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <FaStar className="star filled" />
                <span className="pc-score">{product.rating?.rate}</span>
                <span className="pc-count">({product.rating?.count})</span>
              </div>

              <p className="pc-compat-label">Compatible with:</p>
              <div className="pc-tags">
                <span className="pc-tag">iPhone</span>
                <span className="pc-tag">Android</span>
                <span className="pc-tag">Tablet</span>
                <span className="pc-tag">Laptop</span>
              </div>

              <div className="pc-price-row">
                <span className="pc-price">${product.price}</span>
                <span className="pc-bulk">Bulk Available</span>
              </div>

              <div className="pc-actions">
                <button className="pc-btn-cart">Add to Cart <FiShoppingCart /></button>
                <button className="pc-btn-icon refresh"><FiRefreshCw /></button>
                <button className="pc-btn-icon whatsapp"><FaWhatsapp /></button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default ShopNow