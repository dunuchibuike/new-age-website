import React, { useRef } from 'react'
import Header from '../Components/Header'
import ShopNowHeroSection from '../Components/ShopNowHeroSection'
import ShopNow from '../Components/ShopNow'

const ShopNowPage = () => {
  const shopRef = useRef(null)

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page-wrapper">
      
      <Header />

      
      <main className="main-content">
        <ShopNowHeroSection onShopNow={scrollToShop} />
        
        <div ref={shopRef}>
          <ShopNow />
        </div>
      </main>
    </div>
  )
}

export default ShopNowPage