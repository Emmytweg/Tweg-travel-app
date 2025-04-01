import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlide from './ReviewSlide'
const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
        <div className='w-[80%] mx-auto grid item-center grid-cols-1 lg:grid-cols-2 gap-10'>

            {/* text content */}
        <div className='text-2xl font-semibold text-white '>
            <h1>What our customers are saying about us? </h1>
            <p className='mt-6 text-gray-200 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus, animi perferendis in atque corporis reiciendis quam ipsum aperiam odio architecto esse error quibusdam doloribus, ea est et, itaque ab.</p>
            {/* rating */}
            <div className='mt-6 flex item-center space-x-6  '>
                <div>
                    <p className='text-2xl font-bold text-white'>4.83</p>
                    <p className='mb-2 text-white'>Overall Rating</p>
                    <div className="flex items-center">
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />
                        <FaStar className="text-white" />


                    </div>

                </div>
            </div>
        </div>
{/* slider */}
<div className="overflow-hidden">
    <ReviewSlide />
</div>
        </div>
            </div>
  )
}

export default Review
