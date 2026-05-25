import React from 'react'
import Header from '../Components/Header'
import LandingPageHero from '../Components/LandingPageHero'
import LandingPageSubHero from '../Components/LandingPageSubHero'
import Carousel from '../Components/Carousel'
import Testimonials from '../Components/Testimonials'
import HowItWorks from '../Components/HowItWorks'
import LatestArticles from '../Components/LatestArticles'
import PromoBanner from '../Components/PromoBanner'
import Footer from '../Components/Footer'
const LandingPage = () => {
  return (
    <div>
   <Header/>
    <LandingPageHero/>
    <LandingPageSubHero/>
    <Carousel/>
    <HowItWorks/>
    <Testimonials/>
    <LatestArticles/>
    <PromoBanner/>
    <Footer/>
    </div>
  )
}

export default LandingPage
