'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards, Autoplay } from "swiper/modules" // Import Autoplay module
import { reviewData } from '../../../data/data'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
const ReviewSlide = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} // Add Autoplay module
        autoplay={{
          delay: 5000, // Set delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        className='md:w-[450px] md:h-[350px] w-[90%] h-fit  '
      >
        {reviewData.map((item) => {
          return (
            <SwiperSlide key={item.id} className='bg-white dark:bg-black dark:text-white rounded-3xl block  '>
              <div className='w-[80%] mx-auto mt-12'>
                {/* review text */}

                <p className='w-[80%] mx-auto  font-semibold text-base'>{item.review}</p>
                {/* icons */}
                <div className='flex items-center w-[80%] mt-4 mx-auto '>
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-600' />
                </div>
                {/* users profile */}
                <div className='mt-6 w-[70%]'>
                <div className='flex items-center space-x-4'>
<Image src={item.image} width={60} height={60}  alt='client' className='rounded-full' />

<div>
    <p className='text-sm sm:text-lg font-semibold'>{item.name} </p>
    <p className='text-gray-600 text-xs sm:text-base  '>Web Developer</p>
</div>

                </div>

                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ReviewSlide