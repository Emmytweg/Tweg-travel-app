'use client'

import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoose from './WhyChoose/WhyChoose';
import Review from './Review/Review';
import News from './News/News';
import NewsLetter from './NewsLetter/NewsLetter';
const Home = () => {
useEffect(() => {
  const initAOS = async() => {
    const AOS = (await import('aos')).default;
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement : 'top-bottom'
    });
  }
  initAOS();
}, []);
  
  return (
    <div className='overflow-hidden '> 
     <Hero />
     <Destination />
     <Hotel />
     <WhyChoose />
     <Review />
     <News />
    <NewsLetter />
    </div>
  )
}

export default Home
