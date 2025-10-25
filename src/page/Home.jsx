import React from 'react'
import { Link } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";


export default function Home() {
  return (
    <div className='bg-[image:linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url(./assets/bg1.jpg)]  min-h-screen max-h-full w-screen bg-cover bg-center'>
      <div className='h-20 pt-5 w-screen flex justify-between rounded-b-4xl pr-10 pl-10 bg-black/0'>
        <div>
          <h1 className='text-white text-3xl font-bold'><span className='text-amber-400'>W</span>onder <span className='text-amber-400'>W</span>heelz</h1>
          <p className='text-white text-sm -mt-2 ml-8'>Your Journey starts here</p>
        </div>
        <div className='flex gap-8'>
          <Link to='products'><FaRegBell className='text-3xl text-white  shadow-[0px_0px_30px_2px] shadow-black/10 p-2 h-10 w-10 rounded-2xl hover:text-yellow-400 hover:bg-white hover:shadow-white/70' /></Link>
          <Link to='/signin'><CgProfile className='text-3xl text-white shadow-[0px_0px_30px_2px] shadow-black/10 p-2 h-10 w-10 rounded-2xl hover:text-yellow-400 hover:bg-white hover:shadow-white/70' /></Link>
        </div>
      </div>
      <div className='content-center text-center h-140'>
        <p className='text-white text-xl'>Drive your adventure, anytime.<br/>Rent the perfect car for your journey with our flexible and affordable services.</p>
        <p className='text-yellow-300 mb-6 text-xl'>Your Journey starts here</p>
        <Link to={'products'} className='text-white pl-9 pr-9 pt-3 pb-3 bg-white/60 rounded-4xl'>Let's Go</Link>

      </div>
    </div>
  )
}
