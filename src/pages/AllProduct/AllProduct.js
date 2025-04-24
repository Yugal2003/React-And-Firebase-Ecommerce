import React, { useContext, useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import myContext from '../../context/myContext';
import Loader from '../../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';
import toast from 'react-hot-toast';

const AllProduct = () => {

    const context = useContext(myContext);
    const {loading,getAllProduct} = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (product) =>{
        dispatch(addToCart(product));
        toast.success("Add item success !!!",{position:"top-right"});
    }

    const deleteCart = (product) =>{
        dispatch(deleteFromCart(product));
        toast.success("Delete item success !!!",{position:"top-right"});
    }

    useEffect(()=> {
        localStorage.setItem('cart',JSON.stringify(cartItems));
    },[cartItems]);

  return (
    <Layout>
        <div className='w-full'>
        <div className='flex flex-col justify-center items-center w-full'>
            
            {/* title */}
            <div className='flex justify-center text-center w-full font-bold text-xl mt-8'>
                <h1>Bestselling Products</h1>
            </div>

            <div className='flex justify-center mt-8'>
                {loading && <Loader/>}
            </div>

            {/* map data */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 p-4 lg:p-8'>
                {
                    getAllProduct.map((product,index)=>{
                        return(
                            <div key={index} className='cursor-pointer rounded-md flex flex-col text-center'>
                                <Link to={`/productinfo/${product.id}`}><img className='rounded-md object-contain lg:h-80  h-96 w-full hover:scale-105 duration-500' src={product.productImageUrl} alt='product_img'/></Link>
                                <h2 className='font-bold text-base lg:text-lg min-h-16'>{product.title}</h2>
                                <h3 className='font-bold text-base lg:text-lg'>Price : <span className='text-pink-700'>₹{product.price}</span></h3>
                                {/* <h3 className='font-bold text-base lg:text-lg'>{product.desc.substring(0,30)}</h3> */}
                                {
                                    cartItems.some((p) => p.id === product.id)
                                    ?
                                    <button onClick={()=> deleteCart(product)} className='rounded-md p-2 text-black font-bold text-lg hover:bg-pink-600 bg-pink-500 duration-500'>Delete From Cart</button>
                                    :
                                    <button onClick={()=> addCart(product)} className='rounded-md p-2 text-black font-bold text-lg hover:bg-pink-600 bg-pink-500 duration-500'>Add To Cart</button>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default AllProduct;