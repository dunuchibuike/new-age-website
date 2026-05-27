import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'
import Validation from './Validation'
import '../CSS/SignupPage.css'

const BaseUrl = import.meta.env.VITE_BASE_URL

const SignUpPage = () => {
  const navigate = useNavigate()
  const { errors, strength, validate } = Validation()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
   
    email: '',
      phoneNumber: '',
    password: '',

  })

  const [showPassword, setShowPassword] = useState(false)

  
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    validate(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BaseUrl}/customer`, form)
      console.log(response.data)
      alert('Account created successfully!')
      navigate('/login')
    } catch (err) {
      console.log(err)
      alert('Something went wrong, try again')
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-header">
          <h1 className="signup-title">Create an account</h1>
          <p className="signup-subtitle">Sign up to enjoy unlimited shopping with us.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label className="form-label">First Name</label>
            <div className={`input-wrapper ${errors.firstName ? 'input-error' : ''}`}>
              <input
                className="form-input"
                type="text"
                name="firstName"
                placeholder="Enter Your Name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <div className={`input-wrapper ${errors.lastName ? 'input-error' : ''}`}>
              <input
                className="form-input"
                type="text"
                name="lastName"
                placeholder="Enter Your Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div className={`input-wrapper ${errors.phoneNumber ? 'input-error' : ''}`}>
              <input
                className="form-input"
                type="tel"
                name="phoneNumber"
                placeholder="Input phone number"
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <div className={`input-wrapper ${errors.email ? 'input-error' : ''}`}>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className={`input-wrapper ${errors.password ? 'input-error' : ''}`}>
              <AiOutlineLock className="input-icon" />
              <input
                className="form-input"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Input password"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            {errors.password && <span className="error-text">{errors.password}</span>}

            {form.password.length > 0 && (
              <div className="strength-wrap">
                <div className={`strength-bar ${strength}`} />
                <span className={`strength-label ${strength}`}>
                  {strength.charAt(0).toUpperCase() + strength.slice(1)}
                </span>
              </div>
            )}
          </div>

          <button type="submit" className="signup-btn" onClick={handleSubmit} >Sign Up</button>

        </form>

        <div className="divider">
          <hr className="divider-line" />
          <span className="divider-text">OR SIGN UP WITH</span>
          <hr className="divider-line" />
        </div>

        <div className="socials">
          <button className="social-btn"><FcGoogle className="social-icon" /></button>
          <button className="social-btn"><FaFacebook className="social-icon facebook" /></button>
          <button className="social-btn"><FaApple className="social-icon apple" /></button>
        </div>

        <p className="signin-text">
          Got an account?{' '}
          <span className="signin-link" onClick={() => navigate('/login')}>
            Sign In
          </span>
        </p>

      </div>
    </div>
  )
}

export default SignUpPage