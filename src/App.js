
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from './component/Deals';
import Coupons from './component/Coupons';
import Login from './component/Login';
import Signup from './component/Signup';

import CartDeal from './component/CartDeal';


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/deals" element={<Deals />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cartdeal" element={<CartDeal />} />

        <Route path="/" element={<Home/>} />

        </Routes>

    </>
  );
}

export default App;
