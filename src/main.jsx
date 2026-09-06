import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { WishlistProvider } from './Context/WishlistContext.jsx'
import './responsive.css'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </CartProvider>,
)
