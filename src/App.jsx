import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUpPage from "./Auth/SignUpPage";
import LoginPage from "./Auth/LoginPage";
import ContactUs from "./Pages/ContactUs";
import ShopNow from "./Components/ShopNow";
import PrivateRoute from "./Lib/Private";
import ShopNowPage from "./Pages/ShopNowPage";
import AccountSettings from "./Pages/AccountSettings";
import Public from "./Lib/Public";
import AboutUs from "./Pages/AboutUs";
import SupportPage from "./Pages/SupportPage";
import AffilatePage from "./Pages/AffiliatePage";
import Cart from "./Components/Cart";
import Checkout from "./Pages/Checkout";
import OrderConfirmation from "./Components/OrderConfirmation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Support" element={<SupportPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/affiliate" element={<AffilatePage />} />

          <Route
            path="/Shop"
            element={
              <PrivateRoute>
                <ShopNowPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/Profile"
            element={
              <PrivateRoute>
                <AccountSettings />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <Public>
                <LoginPage />
              </Public>
            }
          />

          <Route
            path="/signUp"
            element={
              <Public>
                <SignUpPage />
              </Public>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />

          <Route
            path="/order-confirmation"
            element={
              <PrivateRoute>
                <OrderConfirmation />
              </PrivateRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
