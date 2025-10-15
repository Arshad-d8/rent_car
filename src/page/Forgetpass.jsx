import React from 'react'

export default function Forgetpass() {
  return (
    <div className='h-[100vh] content-center bg-gradient-to-br from-red-400 via-red-800 to-red-950 w-screen'>
            <div className='justify-self-center text-center w-90'>
                <h1 className='block text-3xl mb-10 text-white font-bold'>Forget Password</h1>
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="text" placeholder='Enter Old-Password' />
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="password" placeholder='Enter New-Password' />
                <input className='bg-white/20 w-full block h-13 mt-5 rounded-2xl pl-5 p-7 text-white' type="password" placeholder='Confirm New-Password' />
                <button className='hover:bg-red-300 cursor-pointer bg-white/90 block h-13 w-full  mt-10 rounded-2xl'>Submit</button>
            </div>
        </div>
  )
}
