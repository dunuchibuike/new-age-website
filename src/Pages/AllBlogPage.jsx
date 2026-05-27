import React from 'react'
import HeaderText from '../Components/HeaderText'
import NewAgeHeader from '../Components/NewAgeHeader'
import Blog from '../Components/Blog'
import Articles from '../Components/Articles'
import Pagination from '../Components/Pagination'
import Footer from '../Components/Footer'
const AllBlogPage = () => {
  return (
    <div>
      <HeaderText/>
      <NewAgeHeader/>
      <Blog/>
      <Articles/>
       <Articles/>
       <Pagination/>
      <Footer/>
    </div>
  )
}

export default AllBlogPage
