import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import SignUpPage from './Auth/SignUpPage'
import LoginPage from './Auth/LoginPage'
import ContactUs from './Pages/ContactUs'

function App() {
 return (
   <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </BrowserRouter>
   </div>
);
};

export default App
