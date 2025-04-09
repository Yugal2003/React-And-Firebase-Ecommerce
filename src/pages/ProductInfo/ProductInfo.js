import React from 'react'
import Layout from '../../components/Layout/Layout';
import { FaStar } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <Layout>
        <div className='w-full flex flex-col lg:flex-row items-center p-8 gap-8 lg:gap-0'>

            {/* image */}
            <div className='w-full object-cover flex justify-center items-center'>
              <img width={400} className='rounded-full' src='https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg' alt='img'/>
            </div>

            {/* text section */}
            <div className='w-full flex flex-col justify-center gap-10'>
                <div className='font-bold text-xl text-gray-700 uppercase'>
                  <h1>Kaushalam kalash Copper Pot</h1>
                </div>

                <div className='flex items-center gap-1'>
                    <h1 className='text-xl font-bold text-gray-700'>Rating :</h1>
                    <FaStar className="text-yellow-500" size={20}/>
                    <FaStar className="text-yellow-500" size={20}/>
                    <FaStar className="text-yellow-500" size={20}/>
                    <FaStar className="text-yellow-500" size={20}/>
                </div>

                <div className='font-bold text-xl text-gray-700'>
                  RS. 7000.00
                </div>

                <div className='flex flex-col gap-4'>
                  <h1 className='font-bold text-xl text-gray-700'>Description : </h1>
                  <p className='font-semibold'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>

            </div>
        </div>
    </Layout>
  )
}

export default ProductInfo;