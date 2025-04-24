import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteFromCart, incrementQuantity } from '../../redux/cartSlice';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import BuyNowModal from '../../components/buyNowModal/BuyNowModal';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

const CartPage = () => {

    const user = JSON.parse(localStorage.getItem('users'));
    console.log(user);
    

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    const discount = (cartTotal * 10) / 100;

    const finalTotal = cartTotal - discount;
    console.log(cartTotal);
    console.log(finalTotal);

    const [addressInfo, setAddressInfo] = useState({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const buyNowFunction = () => {
        // validation 
        if (addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "") {
            return toast.error("All Fields are required",{position:"top-right"})
        }

        // Order Info 
        const orderInfo = {
            cartItems,
            addressInfo,
            email: user.email,
            userid: user.uid,
            status: "confirmed",
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        }
        try {
            const orderRef = collection(fireDB, 'order');
            addDoc(orderRef, orderInfo);
            setAddressInfo({
                name: "",
                address: "",
                pincode: "",
                mobileNumber: "",
            })
            toast.success("Order Placed Successfully !!!",{position:"top-right"})
        } catch (error) {
            console.log(error)
        }

    }
    
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
                    cartItems.length > 0
                    ?
                    <>
                        {
                            cartItems.map((pro,index) =>(
                                <div key={index} className='flex flex-col gap-2'>
                                    <div className='flex gap-4'>
                                        <div>
                                            <img width={80} src={pro.productImageUrl} alt='img'/>
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <h1 className='font-bold'>{pro.title}</h1>
                                            <div className='flex items-center gap-4'>
                                                <h2>{pro.color}</h2>
                                                <h2>{pro.size}</h2>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <h2 className='text-black'>{pro.price}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* minus & plus */}
                                    <div className='flex gap-8'>
                                        <div className='flex gap-6 items-center'>
                                            <button onClick={()=> handleDecrement(pro.id)}>-</button>
                                            <h1>{pro.quantity}</h1>
                                            <button onClick={()=> handleIncrement(pro.id)}>+</button>
                                        </div>

                                        <div>
                                            <button onClick={() => deleteCart(pro)} className='flex items-center'><FaTrash className='text-red-600' size={15}/></button>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            ))
                        }
                    </>
                    :
                    <h1 className='font-bold text-red-500 text-2xl'>No Product Found !!!</h1>
                   }
                </div>

                {/* right */}
                <div className='flex flex-col items-center justify-start w-full lg:w-[50%] gap-3'>
                    <div className='flex justify-between items-center w-full lg:w-[50%]'>
                        <h1 className='text-xl'>Price Details</h1>
                        <h1 className='text-xl'>({cartItemTotal} item)</h1>
                    </div>
                    <hr/>
                    <div className='flex justify-between w-full lg:w-[50%]'>
                        <h1>Price</h1>
                        <h1>₹{cartTotal}</h1>
                    </div>
                    <div className='flex justify-between w-full lg:w-[50%]'>
                        <h1>Discount</h1>
                        <h1>10%</h1>
                    </div>
                    <div className='flex justify-between w-full lg:w-[50%]'>
                        <h1>Delivery Charges</h1>
                        <h1 className='text-green-500 font-bold'>Free</h1>
                    </div>
                    <hr/>
                    <div className='flex justify-between w-full lg:w-[50%]'>
                        <h1>Total Amount</h1>
                        <h1>₹{finalTotal}</h1>
                    </div>
                    <hr/>
                    {
                        user
                        ?
                        // <>
                        //     <button className='flex justify-center w-full lg:w-[50%] rounded-md p-1.5 cursor-pointer hover:bg-pink-700 duration-300 bg-pink-600 text-white'>Buy Now</button>
                        // </> 
                            <BuyNowModal
                                addressInfo={addressInfo}
                                setAddressInfo={setAddressInfo}
                                buyNowFunction={buyNowFunction}
                            />
                        :
                        <Navigate to={'/login'}/>
                    }
                </div>

            </div>
        </div>
    </Layout>
  )
}

export default CartPage;