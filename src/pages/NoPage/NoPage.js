import React from 'react'
import img1 from '../../../src/assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif';

const NoPage = () => {
  return (
    <div className='flex justify-center w-full h-screen items-center text-2xl font-bold'>
      <img src={img1} alt='not_found_img'/>
    </div>
  )
}

export default NoPage