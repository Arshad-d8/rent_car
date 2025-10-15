import React from 'react'
import { Link } from 'react-router-dom'

export default function Sign_up() {
  return (
    <div className='h-[100vh] content-center bg-gradient-to-br from-red-400 via-red-800 to-red-950 w-screen'>
            <div className='justify-self-center text-center w-90'>
                <h1 className='block text-3xl mb-10 text-white font-bold'>Create New Account</h1>
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="text" placeholder='Full Name' />
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="email" placeholder='Email Address' />
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="text" placeholder='Phone Number' />
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="password" placeholder='Password' />
                <button className='hover:bg-[#EF88AD] cursor-pointer bg-white/90 block h-13 w-full  mt-15 rounded-2xl'>Sign Up</button>
                <p className='text-white mt-3'>Have an account? <Link to={'/'} className='text-blue-500'>Sign In</Link></p>
            </div>
        </div>
  )
}
