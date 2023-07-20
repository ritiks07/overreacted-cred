import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/common/Header'
import ProductShowcase from '../components/ProductShowcase'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'

const HomePage = () => {
  return (<>
  <Header/>
  <HeroSection/>
  <ProductShowcase/>
  <FeelSpecial/>
  <CredExperience/>
  <CredSecurity/>
  </>
    
  )
}

export default HomePage