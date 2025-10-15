import React from 'react'
import Login from './page/Sign_in'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Forgetpass from './page/Forgetpass';
import Sign_up from './page/Sign_up';
import Sign_in from './page/Sign_in';
import Profile from './page/Profile';
import Products from './page/Products';
import Productcard from './page/productcard';
import Navbar from './components/navbar';
import Payment from './page/Payment';

export default function App() {
  // const location=useLocation();
  return (
    <div>
      <BrowserRouter>
      { location.pathname !== '/' && <Navbar/>}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Sign_in/>}/>
        <Route path='forgetpassword' element={<Forgetpass/>}/>
        <Route path='sign_up' element={<Sign_up/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='products' element={<Products/>} />
        <Route path='products/:pid/payment' element={<Payment/>}/>
        <Route path='products/:pid' element={<Productcard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
