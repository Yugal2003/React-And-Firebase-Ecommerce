import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem("users"));
    console.log(user);

    const navigate = useNavigate();

    const logout = () =>{
        if(window.confirm("Are You Sure To Logout !!!")){
            localStorage.clear("users");
            navigate('/login')
            toast.success("Logout Successfully !!!",{position:"top-right"})
        }
        else{
            toast.error("Logout Failed !!!",{position:"top-right"})
        }
    }
    
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
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/allproduct'}><li>All Products</li></Link>
                    {
                        !user ? <Link to={'/signup'}><li>SignUp</li></Link> : ""
                    }
                    {
                        !user ? <Link to={'/login'}><li>Login</li></Link> : ""
                    }
                    {
                        user?.role === "user" && <li>
                            <Link to={'/user-dashboard'}>User</Link></li>
                    }
                    {
                        user?.role === "admin" && <li>
                            <Link to={'/admin-dashboard'}>Admin</Link></li>   
                    }
                    {
                        user && <li className="cursor-pointer" onClick={logout}>Logout</li>
                    }
                     <li>
                        <Link to={'/cart'}>
                            Cart(0)
                        </Link>
                    </li>
                </ul>
            </div>
            
            {/* searchbar */}
            <SearchBar/>
        </div>
    </div>
  )
}

export default Navbar