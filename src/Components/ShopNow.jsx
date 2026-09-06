import { useState, useEffect } from 'react'
import { FiHeart, FiShoppingCart, FiRefreshCw } from 'react-icons/fi'
import { FaWhatsapp, FaStar } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import '../CSS/ShopNow.css'

const BaseUrl = import.meta.env.VITE_BASE_URL

const ShopNow = () => {
  const [products, setProducts] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
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
    // nav('/cart')
  }

  if (loading) return <p className="pc-loading">Loading products...</p>

  const normalizeCategory = (category) => category?.toLowerCase().replace(/s$/, '')
  const selectedCategory = normalizeCategory(searchParams.get('category'))
  const searchQuery = searchParams.get('query')?.trim().toLowerCase() || ''
  const visibleProducts = products.filter(product => {
    const categoryMatches = !selectedCategory || normalizeCategory(product.productCategory) === selectedCategory
    const searchableText = [product.productName, product.productCategory, product.productDescription]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
    return categoryMatches && (!searchQuery || searchableText.includes(searchQuery))
  })

  return (
    <section className="sn-section">
      <div className="sn-grid">
        {visibleProducts.map(product => (
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
                <button className="sn-btn-icon sn-refresh" type="button" aria-label={`View ${product.productName}`} onClick={() => nav('/product-details')}><FiRefreshCw /></button>
                <a className="sn-btn-icon sn-whatsapp" aria-label={`Ask about ${product.productName} on WhatsApp`} href={`https://wa.me/?text=${encodeURIComponent(`Hello, I would like to know more about ${product.productName}.`)}`} target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              </div>
            </div>

          </div>
        ))}
      </div>
      {!visibleProducts.length && (
        <p className="sn-empty-state">No products found for “{searchParams.get('query') || searchParams.get('category')}”.</p>
      )}
    </section>
  )
}

export default ShopNow
