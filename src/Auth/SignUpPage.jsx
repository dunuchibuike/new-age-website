import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'
import '../CSS/SignupPage.css'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
   
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
            <div className="input-wrapper">
             
              <input
                className="form-input"
                type="text"
                name="firstName"
                placeholder="Enter Your Name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <div className="input-wrapper">
             
              <input
                className="form-input"
                type="text"
                name="lastName"
                placeholder="Enter Your Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <div className="input-wrapper">
             
              <input
                className="form-input"
                type="tel"
                name="phoneNumber"
                placeholder="Input phone number"
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

         
          <div className="form-group">
            <label className="form-label">Email</label>
            <div className="input-wrapper">
              
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

      
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
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
          </div>

        
          <button type="submit" className="signup-btn">Sign Up</button>

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
          <span className="signin-link">Sign In</span>
        </p>

      </div>
    </div>
  )
}

export default SignUpPage