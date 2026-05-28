import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/AccountSettings.css";
import HeaderText from "../Components/HeaderText";
import NewAgeHeader from "../Components/NewAgeHeader";
import Footer from "../Components/Footer";
import { useCart } from "../Context/CartContext";
const AccountSettings = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem('user')
    if (!user || user === 'undefined') return {}
    return JSON.parse(user)
  } catch {
    return {}
  }
}

const AccountSettings = () => {
  const user = getUserFromStorage()
}
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    clearCart()
    navigate('/')
  }

  return (
    <div className="account-page">
      <HeaderText />
      <NewAgeHeader />

      <div className="account-holder">
        <div className="account-container">
          <div className="title-section">
            <h1>Account Settings</h1>
            <p>Edit Your Name, Picture etc</p>
          </div>

          <div className="profile-section">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
              alt="profile"
              className="profile-image"
            />

            <div className="profile-details">
              <h2>Profile</h2>
              <div className="profile-buttons">
                <button className="upload-btn">Upload Image</button>
                <button className="remove-btn">Remove</button>
              </div>
              <p className="support-text">
                We support PNGs, JPEGs and GIFs under 10MB.
              </p>
            </div>
          </div>

          <form className="settings-form">
            <section className="settings-right">
              <div className="group-form">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                 
                />
              </div>
              <div className="group-form">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                
                />
              </div>
              <div className="group-form">
                <label>Gender</label>
                <select>
                  <option>Select Option</option>
                  <option>Female</option>
                  <option>Male</option>
                </select>
              </div>
              <div className="action-buttons">
                <button className="save-btn" type="submit">Save Changes</button>
                <button className="delete-btn" type="button">Delete Account</button>
              </div>
            </section>

            <section className="settings-left">
              <div className="group-form">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                
                />
              </div>
              <div className="group-form">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Input Phone number"
                 
                />
              </div>
            </section>
          </form>

          {/* ✅ Logout button here — separate and clear */}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AccountSettings