import React from 'react'
import { Link } from 'react-router-dom'

const HomePageProductCard = () => {

    const productData = [
        {
            id: 1,
            image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 150,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
            title: 'Kaushalam kalash Copper Pot',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 130,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 1,
            image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 150,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
            title: 'Kaushalam kalash Copper Pot',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 130,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        }
    ]

  return (
    <div className='w-full'>
        <div className='flex flex-col justify-center items-center w-full'>
            
            {/* title */}
            <div className='flex justify-center text-center w-full font-bold text-xl mt-8'>
                <h1>Bestselling Products</h1>
            </div>

            {/* map data */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 p-4 lg:p-8'>
                {
                    productData.map((product,index)=>{
                        return(
                            <div key={index} className='cursor-pointer rounded-md flex flex-col text-center'>
                                <Link to='/productinfo'><img className='w-full hover:scale-105 duration-500 object-cover rounded-md' src={product.image} alt='product_img'/></Link>
                                <h2 className='font-bold text-base lg:text-lg min-h-16'>{product.title}</h2>
                                <h3 className='font-bold text-base lg:text-lg'>Price : <span className='text-pink-700'>₹{product.price}</span></h3>
                                {/* <h3 className='font-bold text-base lg:text-lg'>{product.desc.substring(0,30)}</h3> */}
                                <button className='rounded-md p-2 hover:text-white text-black font-bold text-lg bg-pink-700 duration-500'>Add To Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default HomePageProductCard