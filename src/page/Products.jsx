import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { card } from "../assets/assets.js"
import { IoLocationOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

export default function Products() {
    const navigate = useNavigate();
    const [state, setState] = useState(card)
    const [show, setShow] = useState(false)

    const handleclick = (id) => {
        navigate(`${id}`)
    }

    return (
        <div className=' min-h-screen max-h-full  bg-white bg-fixed w-full pt-20' >
            {/* <div className='h-20 pt-5 flex justify-between rounded-b-4xl pr-10 pl-10 bg-amber-400'>
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
            </div> */}
            <div className='pb-10 pl-10 pr-10 pt-5'>

                {show ?
                    <div>
                        <h1 className='inline text-5xl ml-5 font-bold'>Cars</h1>
                        <button className='float-right text-md text-white cursor-pointer mr-3 mt-5 pr-5 pl-5 pt-1 pb-1 bg-yellow-400 rounded-3xl hover:text-yellow-400 hover:bg-white hover:shadow-[0px_0px_10px_1px] hover:shadow-black/20' onClick={() => setShow(!show)}>Show less</button>
                        <div className=' grid grid-cols-4 gap-15 mt-5 w-full'>
                            {state.map((cards, i) => (

                                <div key={i} onClick={() => handleclick(cards.id)} className='hover:-translate-y-3 cursor-pointer justify-items-center  shadow-[0px_20px_35px_10px] shadow-black/20 p-2 rounded-3xl text-black  backdrop-blur-2xl '>
                                    <img src={cards.image} className='h-50 w-full rounded-t-3xl ' alt="nothing" />
                                    <h1 className='float-start pt-3'>{cards.name}</h1>
                                    <div className='flex justify-between w-full pb-3'>
                                        <p className='flex'><IoLocationOutline className='relative top-1' />{cards.location}</p>
                                        <p className='text-yellow-400'>${cards.price}/day</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    :
                    <div>
                        <h1 className='inline text-5xl ml-5 font-bold'>Cars</h1>
                        <button className='float-right text-md text-white cursor-pointer mr-3 mt-5 pr-5 pl-5 pt-1 pb-1 bg-yellow-400 rounded-3xl hover:text-yellow-400 hover:bg-white hover:shadow-[0px_0px_10px_1px] hover:shadow-black/20' onClick={() => setShow(!show)}>Show all</button>
                        <div className=' grid grid-cols-4 gap-15 w-full mt-5'>
                            {state.slice(0, 4).map((cards, i) => (
                                <div key={i} onClick={() => handleclick(cards.id)} className='hover:-translate-y-3 cursor-pointer justify-items-center  shadow-[0px_15px_35px_5px] shadow-black/30 p-2 rounded-3xl text-black  backdrop-blur-2xl '>
                                    <img src={cards.image} className='h-50 w-full rounded-t-3xl ' alt="nothing" />
                                    <h1 className='float-start pt-3'>{cards.name}</h1>
                                    <div className='flex justify-between w-full pb-3'>
                                        <p className='flex'><IoLocationOutline className='relative top-1' />{cards.location}</p>
                                        <p className='text-yellow-400'>${cards.price}/day</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}
