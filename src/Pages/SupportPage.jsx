import React from 'react'
import Support from '../Components/Support'

import ReturnPolicy from '../Components/ReturnPolicy'
import Header from '../Components/Header'
import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
const SupportPage = () => {
  return (
    <div>
      <HeaderText/>
      <NewAgeHeader/>
      <Support/>
      <ReturnPolicy/>
    </div>
  )
}

export default SupportPage
