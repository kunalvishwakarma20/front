import React from 'react'
import Hero from '../Components/Hero'
import Popular from "../Components/Popular";
import Offer from '../Components/Offer'
import NewCollection from '../Components/NewCollection'
import Newsletter from '../Components/Newsletter'
import EmailButton from '../Components/EmailButton'
import TrendingLooksSlider from '../Components/TrendingLooksSlider';
import Appointment from '../Components/Appointment';

const Home = () => {
  return (
    <>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
  
      <Appointment/>
      <TrendingLooksSlider/>
      <EmailButton/>
      
    </>
  )
}

export default Home