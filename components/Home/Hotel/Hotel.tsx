import React from 'react'
import SectionHeading from '../Helper/SectionHeading';
import { hotelsData } from '../../../data/data';
import HotelCard from './HotelCard';
const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
      {/* section heading */}
      <SectionHeading heading='Recommended Hotels'/>
      <div className='w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
{/* Hotel data */}
{hotelsData.map((item,i) => {
    return(
        <div key={item.id} data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay={`${i*100}`}>
            <HotelCard hotel={item} />
        </div>
    )
})}

      </div>
    </div>
  )
}

export default Hotel
