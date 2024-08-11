import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import OverviewCounter from './components/OverviewCounter/OverviewCounter'
import Vision from './components/Vision/Vision'
import Banner from './components/BannerSection/Banner'
import Banner2 from './components/BannerSection/Banner2'
import VideoBanner from './components/VideoBanner/VideoBanner'
import BlogPage from './components/Blogs/BlogPage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden dark:bg-gray-900 bg-white'>
        <Navbar/>
        <Hero/>
        <OverviewCounter/>
        <Vision/>
        <Banner/>
        <Banner2/>
        <VideoBanner/>
        <BlogPage/>
        <Footer/>
      </main>
      
    </>
  )
}

export default App
