import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/google-logo.png'

export default function Sign_in() {
    const[user,setUser]=useState('')
    const[pass,setPass]=useState('')
    const[error,setError]=useState('')

    const handleuser=(event)=>{
        setUser(event.target.value)
    }
    const handlepass=(event)=>{
        setPass(event.target.value)
    }

    const navigate=useNavigate()

    const handlesubmit=()=>{
        if(user=='arshad' && pass==1234){
            navigate('/products')
        }
        user!="arshad" || pass!=1234 ? setError('Incorrect username/password'): setError('')
    }
    return (
        <div className='h-[100vh] content-center bg-gradient-to-br from-red-400 via-red-800 to-red-950 w-screen'>
            <div className='justify-self-center text-center w-90'>
                <h1 className='block text-5xl mb-5 text-white font-bold'>Welcome</h1>
                <p className='float-left text-white ml-3 mb-1'>{error}</p>
                <input onChange={handleuser} className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="text" placeholder='Email ID' />
                <input onChange={handlepass} className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="password" placeholder='Password' />
                <Link className=' float-right mb-15 mt-3 text-white hover:text-[#EF88AD]' to={'forgetpassword'}>Forget password?</Link>
                <button className='hover:bg-[#EF88AD] cursor-pointer bg-white/90 block h-13 w-full  mt-5 rounded-2xl' onClick={handlesubmit} >Sign In</button>
                <button className='hover:bg-[#EF88AD] cursor-pointer bg-white/90 block h-13 w-full  mt-5 rounded-2xl text-sm'><img src={logo} className='w-5 h-5 inline mr-2' />Sign In With Google</button>
                <p className='text-white mt-3'>Don't have an account? <Link to={'sign_up'} className='text-blue-500'>Sign Up</Link></p>
            </div>
        </div>
    )
}
