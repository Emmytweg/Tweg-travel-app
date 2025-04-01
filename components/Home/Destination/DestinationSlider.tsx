'use client'

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { destinationData } from '../../../data/data';
import Image from 'next/image';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
const DestinationSlider = () => {
  return (
    <Carousel

    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    keyBoardControl={true}
  
    transitionDuration={500}
    
  >
    {destinationData.map((item, index) => {
        return(
            <div key={item.id} className='m-3'>
                <div className='relative h-[400px]'>
                    {/* overlay */}
                    <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
                    {/* image */}
                    <Image src={item.image} alt={item.country} width={500} height={500} className='w-full h-full object-cover rounded-lg' />
                    
                </div>
                {/* text content  */}
                <h1 className='text-xl font-semibold mt-4 '>{item.country} </h1>
                    <p className='text-sm text-gray-600 '>{item.travelers} </p>
            </div>
        )
    })}
  </Carousel>
  )
}

export default DestinationSlider
