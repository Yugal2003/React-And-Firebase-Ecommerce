import React from 'react'
import img1 from '../../../assets/Herosection_img.webp';

const HeroSection = () => {
  return (
    <div>
        <div className='flex justify-center items-center w-full'>
            <img src={img1} alt='herosection_img' className='w-full h-36 md:h-44 lg:h-60'/>
        </div>
    </div>
  )
}

export default HeroSection