import React from 'react'
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <div className='w-full mt-2'>
        <div className='w-full mx-auto'>

            <div className='w-full mx-auto flex justify-between items-center px-4'>
                <h1 className='text-xl font-bold text-pink-600'>All Products</h1>
                <Link to={'/addproduct'}>
                    <button className='rounded-md bg-pink-600 duration-300 hover:bg-pink-700 text-white p-1.5 mb-1'>Add Product</button>
                </Link>
            </div>

            {/* table */}
            <table className='w-full text-center border border-black'>
                <thead>
                    <tr className='border border-black'>
                        <th className='border border-black'>S.No.</th>
                        <th className='border border-black'>Location Name</th>
                        <th className='border border-black'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border border-black'>
                        <td className='border border-black'>1</td>
                        <td className='border border-black'>Name</td>
                        <td className='flex justify-center gap-4 my-2'>
                            <button className='rounded-md bg-green-600 duration-300 hover:bg-green-700 text-white p-2'>Edit</button>
                            <button className='rounded-md bg-red-600 duration-300 hover:bg-red-700 text-white p-2'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductDetail;