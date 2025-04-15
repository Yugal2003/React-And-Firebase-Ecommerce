import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/myContext';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';

const Login = () => {

  const context = useContext(myContext);
  const {loading,setLoading} = context;

  const navigate = useNavigate();

  const [userLogin,setUserLogin] = useState({
    email : '',
    password : ''
  })

  const userLoginFunction = async(e) =>{
    if(userLogin.email === "" || userLogin.password === ""){
      toast.error("All Fields are required",{position:"top-right"});
      return;
    }

    if(userLogin.password.length < 6){
      toast.error("Password must be at least 6 characters",{position:"top-right"});
      return;
    }
  
  setLoading(true);

  try {
      const users = await signInWithEmailAndPassword(auth,userLogin.email,userLogin.password);
      console.log(users);
      
      try {
        const q = query(
          collection(fireDB, "user"),
          where('uid', '==', users?.user?.uid)
        );

        const data = onSnapshot(q,(QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => user = doc.data());
          localStorage.setItem("users",JSON.stringify(user));
          setUserLogin({
            email : '',
            password : ''
          });
          toast.success("Login Successfully !!!",{position:"top-right"});
          setLoading(false);
          if(user.role === "user"){
            navigate('/user-dashboard')
          }
          else{
            navigate('/admin-dashboard')
          }
        });
        return () => data;
      } 
      catch (error) {
        console.log(error); 
        setLoading(false);
      }
  } 
  catch (error) {
    console.log(error);
    setLoading(false);
    toast.error("Login Failed",{position:"top-right"});
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9]">
      {loading && <Loader/>}
      <div className="bg-pink-100 rounded-lg p-8 shadow-md w-[350px]">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">Login</h2>
          <input
            type="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e)=> {
              setUserLogin({
                ...userLogin,
                email : e.target.value,      
              });
            }}
            className="w-full mb-4 p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e)=> {
              setUserLogin({
                ...userLogin,
                password : e.target.value,
              });
            }}
            className="w-full mb-6 p-3 rounded-md border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
          />
          <button
            type="submit"
            onClick={userLoginFunction}
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Login
          </button>
        <p className="text-sm text-center mt-4 text-black">
          Don't have an account? <span className="text-pink-600 font-semibold cursor-pointer hover:underline"><Link to={'/signup'}>Signup</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Login;