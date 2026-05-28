import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/Header.css"
import Input from '../Props/Input';
import HeaderText from './HeaderText';
import NewAgeHeader from './NewAgeHeader';
import FilterByHeader from './FilterByHeader';
const Header = ({ children }) => {
  
  return (
    <>
     <div className="fixed-header-container">
      <HeaderText/>
      <NewAgeHeader/>
      <FilterByHeader/>

      <div className="header-content-slot">{children}</div>
      </div>
    </>
  )
}

export default Header
