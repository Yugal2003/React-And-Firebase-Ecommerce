import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/HomePageSections/HeroSection/HeroSection'
import Category from '../../components/HomePageSections/Category/Category'
import HomePageProductCard from '../../components/HomePageSections/HomePageProductCard/HomePageProductCard'
import Testimonial from '../../components/HomePageSections/Testimonial/Testimonial'

const Homepage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Testimonial/>
    </Layout>
  )
}

export default Homepage;