import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const getCartKey = () => {
    try {
      const user = localStorage.getItem('user')
      if (!user || user === 'undefined') return 'cart_guest'
      const parsed = JSON.parse(user)
      return `cart_${parsed.id}`
    } catch {
      return 'cart_guest'
    }
  }

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(getCartKey())
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(getCartKey(), JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const exists = cart.find(item => item._id === product._id)
    if (exists) return
    setCart(prev => [...prev, { ...product, quantity: 1 }])
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item._id !== id))
  }

  const increaseQuantity = (id) => {
    setCart(prev => prev.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQuantity = (id) => {
    setCart(prev => prev.map(item =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

  const clearCart = () => {
    localStorage.removeItem(getCartKey())
    setCart([])
  }

  const reloadCart = () => {
    try {
      const saved = localStorage.getItem(getCartKey())
      setCart(saved ? JSON.parse(saved) : [])
    } catch {
      setCart([])
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, reloadCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)