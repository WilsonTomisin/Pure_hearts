import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrolltoTop from '../components/ScrolltoTop'

const HomeLayout = () => {
  return (
    <>
      <ScrolltoTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeLayout
