'use client'

import React, { useState, useEffect } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import Link from 'next/link'
import { navLinks } from '../../../constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav:() => void
}


const Navbar = ({openNav}:Props) => {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

  return (
    <div className={` z-10 p-10 ${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} flex justify-between items-center transition-all duration-500 h-16 w-full fixed`}>
    <div className='flex justify-between items-center xl:w-[90%] w-full mx-auto'>
        {/* Logo */}
        <div className='flex items-center justify-center space-x-2'>
<div className='w-10 h-10 bg-rose-500 flex items-center justify-center rounded-full'>
    <TbAirBalloon className='text-white w-6 h-6' />
</div>
<h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Tripi </h1>
</div>
{/*NavLinks*/}
<div className='hidden lg:flex items-center space-x-10'>
{
    navLinks.map((link) => {
return <Link href={link.url} key={link.id}> 
<p className="relative text-white text-base font-medium w-fit block after:block after:content-empty after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">{link.label}</p>
   </Link>
    })
}
</div>
{/* Button */}
<div className='flex items-center gap-4'>
<button className='md:px-12 md:py-2.5 px-8 py-2.5 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg '>Book Now</button>
{/* Burget Menu */}
<HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>

</div>
        </div>
         </div>
       
  )
}

export default Navbar
 