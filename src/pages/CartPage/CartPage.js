import React from 'react'
import Layout from '../../components/Layout/Layout';
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
    const products = [
        {
            id: 1,
            name: 'Nike Air Force 1 07 LV8',
            href: '#',
            price: '₹47,199',
            originalPrice: '₹48,900',
            discount: '5% Off',
            color: 'Orange',
            size: '8 UK',
            imageSrc:
                'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
        },
        {
            id: 2,
            name: 'Nike Blazer Low 77 SE',
            href: '#',
            price: '₹1,549',
            originalPrice: '₹2,499',
            discount: '38% off',
            color: 'White',
            leadTime: '3-4 weeks',
            size: '8 UK',
            imageSrc:
                'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
        },
        {
            id: 3,
            name: 'Nike Air Max 90',
            href: '#',
            price: '₹2219 ',
            originalPrice: '₹999',
            discount: '78% off',
            color: 'Black',
            imageSrc:
                'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
        },
    ];

  return (
    <Layout>
        <div className='w-full'>
            {/* heading */}
            <div className='w-full justify-start p-8'>
                <h1 className='font-bold text-3xl'>Shopping Cart</h1>
            </div>

            {/* left & right side */}
            <div className='w-full mx-auto flex flex-col lg:flex-row px-8'>
                <div className='flex flex-col gap-8 p-4 w-[50%]'>
                    {
                        products.map((pro,index) =>(
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-4'>
                                    <div>
                                        <img width={80} src={pro.imageSrc} alt='img'/>
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <h1 className='font-bold'>{pro.name}</h1>
                                        <div className='flex items-center gap-4'>
                                            <h2>{pro.color}</h2>
                                            <h2>{pro.size}</h2>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <h2 className='text-gray-400 line-through'>{pro.originalPrice}</h2>
                                            <h2 className='text-black'>{pro.price}</h2>
                                            <h2 className='text-green-400'>{pro.discount}</h2>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* minus & plus */}
                                <div className='flex gap-8'>
                                    <div className='flex gap-6 items-center'>
                                        <button>-</button>
                                        <h1>1</h1>
                                        <button>+</button>
                                    </div>

                                    <div>
                                        <button className='flex items-center'><FaTrash className='text-red-600' size={15}/>Remove</button>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        ))
                    }
                </div>

                {/* right */}
                <div className='flex flex-col items-center justify-start w-[50%] gap-3'>
                    <div className='flex justify-start w-[50%]'>
                        <h1 className='text-xl'>Price Details</h1>
                    </div>
                    <hr/>
                    <div className='flex justify-between w-[50%]'>
                        <h1>Price (3 items)</h1>
                        <h1>₹52,398</h1>
                    </div>
                    <div className='flex justify-between w-[50%]'>
                        <h1>Discount</h1>
                        <h1>-₹3,431</h1>
                    </div>
                    <div className='flex justify-between w-[50%]'>
                        <h1>Delivery Charges</h1>
                        <h1>Free</h1>
                    </div>
                    <hr/>
                    <div className='flex justify-between w-[50%]'>
                        <h1>Total Amount</h1>
                        <h1>-₹48,967</h1>
                    </div>
                    <hr/>
                    <div className='flex justify-start w-[50%]'>
                        <button className='rounded-md w-full p-1.5 cursor-pointer hover:bg-pink-700 duration-300 bg-pink-600 text-white'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    </Layout>
  )
}

export default CartPage;