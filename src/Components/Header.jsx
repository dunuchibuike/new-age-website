import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/Header.css"
import Input from '../Props/Input';
import HeaderText from './HeaderText';
import NewAgeHeader from './NewAgeHeader';
import FilterByHeader from './FilterByHeader';
const Header = () => {
  
  return (
    <>
     
      <HeaderText/>
      <NewAgeHeader/>
      <FilterByHeader/>
    </>
  )
}

export default Header
