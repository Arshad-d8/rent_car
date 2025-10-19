import React from 'react'
import { LuSettings } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiThumbsUp } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import pro from '../assets/profile.jpg'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div className='grid grid-cols-[350px_1fr]'>
            <div className='ml-5 pr-5 '>
                <div className='flex pt-5'>
                    <div >
                        <FiEdit3 className='text-white bg-amber-400 absolute mt-14 cursor-pointer ml-15 text-3xl rounded-full p-1'/>
                        <img className='h-20 w-20 row-span-2 rounded-lg' src={pro} />
                    </div>
                    <div className='text-left ml-7'>
                        <h3 className='mt-1 mb-2 text-xl font-bold'>Arshad Rahman</h3>
                        <p className='text-md'>Individual Profile</p>
                    </div>
                </div>
                <hr className=" rounded-sm mb-7 mt-3 ml-5 mr-10 text-black/10" />
                <div className='text-md'>
                    <p className='text-sm mb-5 text-black/60'>Account setting</p>
                    <Link><LuSettings className='inline mr-3 text-2xl'/>Account Setting</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                    <Link><IoMdCheckboxOutline className='inline mr-3 text-2xl'/>Request Verification</Link>
                    <hr className=" rounded-sm my-4  text-black/10" />
                    <Link><FaRegEdit className='inline mr-3 text-2xl'/>Edit Profile</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                    <Link><MdArrowOutward className='inline mr-3 text-2xl'/>Manage Outgoing Request</Link>
                    <hr className=" rounded-sm my-4  text-black/10" />
                </div>
                <div className='text-lg'>
                    <p className='text-sm mb-5 text-black/60'>General</p>
                    <Link><GrLanguage className='inline mr-3 text-2xl'/>Language</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                </div>
                <div className='text-lg'>
                    <p className='text-sm mb-5 text-black/60'>Support</p>
                    <Link><IoMdHelpCircleOutline className='inline mr-3 text-2xl'/>Support</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                    <Link><FiThumbsUp className='inline mr-3 text-2xl'/>Feedback</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                    <Link><AiOutlineExclamationCircle className='inline mr-3 text-2xl'/>Request a feature</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                    <Link><IoShareSocial className='inline mr-3 text-2xl'/>Share this app</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                </div>
                <div className='text-lg'>
                    <Link>Share profile</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                    <Link>Copy link</Link>
                    <hr className=" rounded-sm my-4 text-black/10" />
                </div>

            </div>

            <div></div>
        </div>
    )
}
