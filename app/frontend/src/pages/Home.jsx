import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Landing from '../components/home/Landing'
import PopularProduct from '../components/home/PopularProduct'

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <PopularProduct />
      <Footer />
    </>
  )
}

export default Home
