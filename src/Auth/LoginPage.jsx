import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../CSS/LoginPage.css"
const LoginPage = () => {
  const nav = useNavigate()
  return (
    <div className="login-page">
      <div className="login-box">

        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">We missed you! Please enter your details.</p>

        <div className="login-field">
          <p className='label'> Email</p>
          <input type="email" placeholder="Example@gmail.com" />
        </div>

        <div className="login-field">
          <p className='label'>Password</p>
          <input type="password" placeholder="Input password" />
        </div>

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="forgot-password">Forget Password?</a>
        </div>

        <button className="login-btn"
        onClick={() => nav ("/landing")}
        >Sign In</button>

        <div className="login-divider">
          <span></span>
          <p>OR SIGN IN WITH</p>
          <span></span>
        </div>

        <div className="login-socials">
          <button className="social-btn"> <FcGoogle  size={28}/> </button>
          <button className="social-btn"><FaFacebook size={28} color="#1877F2" /></button>
          <button className="social-btn"><FaApple size={28} color="#000" /></button>
        </div>

        <p className="login-signup">Don't Have an account? <a href="#">Sign Up</a></p>

      </div>
    </div>
  )
}

export default LoginPage
