import React from 'react'
import { Link } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

export default function Navbar() {
    return (
        <div>
            <div className='h-20 pt-5 flex justify-between rounded-b-4xl pr-10 pl-10 bg-amber-400'>
                <div className='flex '>
                    <button className='absolute pt-2 pl-2'>
                        <LuSearch className='text-2xl text-white' />
                    </button>
                    <input type="text" placeholder='search your dream car' className='shadow-[0px_10px_25px_5px] shadow-black/10 rounded-xl pl-10 text-white placeholder:text-white/60 h-10 w-100 bg-white/20' />
                    <button><HiMiniAdjustmentsHorizontal className='text-2xl text-white ml-2 mb-5' /></button>
                </div>
                <div className='flex gap-8'>
                    <Link to=''><FaRegBell className='text-3xl text-white  shadow-[0px_0px_30px_2px] shadow-black/10 p-2 h-10 w-10 rounded-2xl hover:text-yellow-400 hover:bg-white hover:shadow-white/70' /></Link>
                    <Link to='/profile'><CgProfile className='text-3xl text-white shadow-[0px_0px_30px_2px] shadow-black/10 p-2 h-10 w-10 rounded-2xl hover:text-yellow-400 hover:bg-white hover:shadow-white/70' /></Link>
                </div>
            </div>
        </div>
    )
}
