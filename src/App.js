import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NoPage from './pages/NoPage/NoPage';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import ScrollTop from './components/ScrollTop/ScrollTop';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='*' element={<NoPage/>}/>
        <Route path='/productinfo' element={<ProductInfo/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;