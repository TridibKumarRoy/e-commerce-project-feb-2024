import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Landing from '../components/home/Landing'
import PopularProduct from '../components/home/PopularProduct'
import AllCategory from '../components/home/AllCategory'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <PopularProduct />
      <AllCategory />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
