import React from "react";
import "../CSS/AccountSettings.css";
import HeaderText from "../Components/HeaderText";
import NewAgeHeader from "../Components/NewAgeHeader";
import Footer from "../Components/Footer";

const AccountSettings = () => {
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
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
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
                <button className="save-btn">Save Changes</button>

                <button className="delete-btn">Delete Account</button>
              </div>
            </section>
            <section className="settings-left">
              <div className="group-form">
                <label>Nickname</label>
                <input type="text" placeholder="Ebere-Lovely" />
              </div>
              <div className="group-form">
                <label>Phone Number</label>
                <input type="text" placeholder="Input Phone number" />
              </div>
            </section>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
