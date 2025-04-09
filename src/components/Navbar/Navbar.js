import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-pink-600 sticky top-0 z-50'>
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-0 lg:justify-between items-center  h-32 lg:h-24 lg:px-3'>

            {/* first */}
            <div className='flex text-2xl items-center justify-center text-white font-bold'>
                <h1>E-Bharat</h1>
            </div>
            
            {/* second */}
            <div className='flex items-center justify-center space-x-4'>
                <ul className='flex gap-4 md:gap-6 text-white font-bold text-sm md:text-base'>
                    <Link to='/'><li>Home</li></Link>
                    <li>All Products</li>
                    <li>SignUp</li>
                    <li>User</li>
                    <li>Cart(0)</li>
                </ul>
            </div>
            
            {/* searchbar */}
            <SearchBar/>
        </div>
    </div>
  )
}

export default Navbar