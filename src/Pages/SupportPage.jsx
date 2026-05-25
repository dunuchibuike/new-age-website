import React from 'react'
import Support from '../Components/Support'

import ReturnPolicy from '../Components/ReturnPolicy'
import Header from '../Components/Header'
import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
import ShippingInfo from '../Components/ShippingInfo'
import Warranty from '../Components/Warranty'
import ContactCta from '../Components/ContactCta'
import Footer from '../Components/Footer'

const SupportPage = () => {
  return (
    <div>
      <HeaderText/>
      <NewAgeHeader/>
      
      <Support/>
      <ReturnPolicy/>
      <ShippingInfo/>
      <Warranty/>
      <ContactCta/>
      <Footer/>
      
    </div>
  )
}

export default SupportPage
