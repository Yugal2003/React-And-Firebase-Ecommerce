import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NoPage from './pages/NoPage/NoPage';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import ScrollTop from './components/ScrollTop/ScrollTop';
import CartPage from './pages/CartPage/CartPage';
import AllProduct from './pages/AllProduct/AllProduct';
import Signup from './pages/Registration/Signup';
import Login from './pages/Registration/Login';
import UserDashboard from './pages/User/UserDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddProductPage from './pages/Admin/AddProductPage';
import UpdateProductPage from './pages/Admin/UpdateProductPage';

function App() {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path='/productinfo' element={<ProductInfo/>}/>
        <Route path='/cart' element={<CartPage/>}/> 
        <Route path='/allproduct' element={<AllProduct/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/addproduct" element={<AddProductPage/>}/>
        <Route path="/updateproduct" element={<UpdateProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;