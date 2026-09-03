import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaFacebook, FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useCart } from '../Context/CartContext'
import '../CSS/LoginPage.css'

const BaseUrl = import.meta.env.VITE_BASE_URL

const LoginPage = () => {
  const nav = useNavigate()
  const { reloadCart } = useCart()

  const [login, setLogin] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await axios.post(`${BaseUrl}/customer/login`, login)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.customer))
      nav('/')          
      reloadCart()    
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">We missed you! Please enter your details.</p>

        <div className="login-field">
          <p className="label">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            value={login.email}
            onChange={handleChange}
          />
        </div>

        <div className="login-field">
          <p className="label">Password</p>
          <div className="login-password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Input password"
              value={login.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="login-password-toggle"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((isVisible) => !isVisible)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {error && <p className="login-error">{error}</p>}

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="forgot-password">Forget Password?</a>
        </div>

        <button
          className="login-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <div className="login-divider">
          <span></span>
          <p>OR SIGN IN WITH</p>
          <span></span>
        </div>

        <div className="login-socials">
          <button className="social-btn"><FcGoogle size={28} /></button>
          <button className="social-btn"><FaFacebook size={28} color="#1877F2" /></button>
          <button className="social-btn"><FaApple size={28} color="#000" /></button>
        </div>

        <p className="login-signup">
          Don't Have an account?{' '}
          <a href="#" onClick={() => nav('/signUp')}>Sign Up</a>
        </p>

      </div>
    </div>
  )
}

export default LoginPage
