import React from 'react'
import Login from './page/Sign_in'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Forgetpass from './page/Forgetpass';
import Sign_up from './page/Sign_up';
import Sign_in from './page/Sign_in';
import Profile from './page/Profile';
import Products from './page/Products';
import Productcard from './page/productcard';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign_in/>}/>
        <Route path='forgetpassword' element={<Forgetpass/>}/>
        <Route path='sign_up' element={<Sign_up/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='products' element={<Products/>} />
        <Route path='products/:pid' element={<Productcard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
