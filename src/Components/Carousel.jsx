import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiRefreshCw } from 'react-icons/fi'
import { FaWhatsapp, FaStar } from 'react-icons/fa'
import '../CSS/Carousel.css'

const products = [
  { id: 1,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 2,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 3,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 4,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 5,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 6,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 7,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 8,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 9,  name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
  { id: 10, name: 'Iron Man Mini', price: 13200, rating: 5, reviews: 567, compatible: ['iPhone', 'Android', 'Tablet', 'Laptop'], image: '', bulkAvailable: true },
]

const CARDS_PER_VIEW = 4
const MAX_INDEX = products.length - CARDS_PER_VIEW

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [wishlist, setWishlist] = useState([])

  const handleNext = () => {
    if (currentIndex < MAX_INDEX) setCurrentIndex(prev => prev + 1)
  }

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1)
  }

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const offset = currentIndex * (100 / CARDS_PER_VIEW)

  return (
    <section className="bs-section">
      <h2 className="bs-title">Our Best Sellers</h2>

      <div className="bs-outer">

        <motion.button
          className="bs-nav-btn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.1, backgroundColor: '#1565c0', color: '#fff' }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <FiChevronLeft />
        </motion.button>

        <div className="bs-window">
          <motion.div
            className="bs-track"
            animate={{ x: `-${offset}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {products.map((product) => (
              <motion.div
                className="bs-card"
                key={product.id}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.13)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.button
                  className={`bs-wishlist ${wishlist.includes(product.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                  whileTap={{ scale: 0.8 }}
                  animate={{ color: wishlist.includes(product.id) ? '#e53935' : '#bbb' }}
                  transition={{ duration: 0.2 }}
                >
                  <FiHeart />
                </motion.button>

                <div className="bs-image-box">
                  {product.image
                    ? <img src={product.image} alt={product.name} className="bs-img" />
                    : <div className="bs-img-placeholder" />
                  }
                </div>

                <div className="bs-info">
                  <p className="bs-name">{product.name}</p>

                  <div className="bs-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < product.rating ? 'star filled' : 'star'} />
                    ))}
                    <span className="bs-score">{product.rating}.0</span>
                    <span className="bs-count">({product.reviews})</span>
                  </div>

                  <p className="bs-compat-label">Compatible with:</p>
                  <div className="bs-tags">
                    {product.compatible.map(tag => (
                      <span className="bs-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="bs-price-row">
                    <span className="bs-price">₦{Number(product.price).toLocaleString()}</span>
                    {product.bulkAvailable && <span className="bs-bulk">Bulk Available</span>}
                  </div>

                  <div className="bs-actions">
                    <motion.button
                      className="bs-btn-cart"
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart <FiShoppingCart />
                    </motion.button>
                    <motion.button className="bs-btn-icon refresh" whileTap={{ scale: 0.9 }}>
                      <FiRefreshCw />
                    </motion.button>
                    <motion.button className="bs-btn-icon whatsapp" whileTap={{ scale: 0.9 }}>
                      <FaWhatsapp />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.button
          className="bs-nav-btn"
          onClick={handleNext}
          disabled={currentIndex >= MAX_INDEX}
          whileHover={{ scale: 1.1, backgroundColor: '#1565c0', color: '#fff' }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <FiChevronRight />
        </motion.button>

      </div>

      <div className="bs-dots">
        {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
          <motion.span
            key={i}
            className={`bs-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
            animate={{
              scale: i === currentIndex ? 1.4 : 1,
              backgroundColor: i === currentIndex ? '#1565c0' : '#ccc',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel