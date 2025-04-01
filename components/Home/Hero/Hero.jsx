import React from 'react'
import SearchBox from '../Helper/SearchBox';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='relative w-full h-[100vh] sm:h-[100vh] '>
        {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 z-[1]"></div>
      <video src='/images/hero1.mp4' autoPlay muted loop preload='metadata' className='w-full h-full object-cover z-[1]' />
      {/* Text Content */}
      <div className='absolute z-[1] w-full h-full  top-[25%] sm:top-[15%]  ' >
         <div className=' flex items-center justify-center flex-col w-full h-full'>
            <div data-aos='fade-up' data-aos-duration='1000' >
                <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[25px] lg:text-[45px]  tracking-[0.7rem] text-white font-bold uppercase '> Let's Enjoy The Nature </h1>
                <p className='md:text-base text-lg text-center text-white font-normal [word-spacing:5px]'>Get the best place on 2,000,000+ properties  worldwide </p>
            </div>
            {/* searchbox */}
            <SearchBox/>
            <div  className='bg-rose-600 rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300 '>

            <Link href='#' >
             <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform -translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease'> </span>
             <span className=' relative font-bold'>Search </span>
             </Link>
            </div>
             
             </div>

         </div>

    </div>
  )
}

export default Hero