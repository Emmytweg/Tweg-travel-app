import Link from 'next/link'
import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-center grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10 '>
        {/* 1st part */}
        <div className='space-y-5'>
        <h1 className='text-lg font-bold'>Company</h1>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >About Us</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Careers</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Blogs</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Gift Cards</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Magazine</p>
        </div>
        {/* 2nd Part */}
        <div className='space-y-5'>
        <h1 className='text-lg font-bold'>Support</h1>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Contact</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Legal Notice</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Privacy Policy</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Terms & Conditions</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Sitemap </p>
        </div>
        {/* 3rd Part */}
        <div className='space-y-5'>
        <h1 className='text-lg font-bold'>Other Services</h1>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Car Hire</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Activity</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Tour List</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Flight Finder</p>
        <p className='text-gray-500 font-medium cursor-pointer text-sm hover:text-blue-950' >Travel Agents </p>
        </div>
        {/* 4th Part */}
        <div >
        <h1 className='text-lg font-bold'>Contact Us</h1>
     <div className='mt-6'>
        <h1 className='text-xs text-gray-600'>Our Mobile Number</h1>
        <p className='text-sm font-bold text-blue-950'>+234 814 457 62</p>
     </div>
     <div className='mt-6'>
        <h1 className='text-xs text-gray-600'>Our Email</h1>
        <p className='text-sm font-bold text-blue-950'>emmanuelolamide706@gmail.com</p>
     </div>
        </div>
      </div>
      {/* copyright */}
      <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'> 
<p className='flex justify-center items-center'>Copyright <span><BiCopyright /> </span>2025 TWEG. All rights Reserved  </p>
<div className='flex gap-2'>
  <span>Social:</span>
  <br />
  <Link href='#' className='text-gray-500 hover:text-gray-900'><FaTwitter /> </Link>
  <Link href='#' className='text-gray-500 hover:text-gray-900'><FaFacebook /> </Link>
  <Link href='#' className='text-gray-500 hover:text-gray-900'><FaInstagram /> </Link>
</div>
      </div>
    </div>
  )
}

export default Footer
