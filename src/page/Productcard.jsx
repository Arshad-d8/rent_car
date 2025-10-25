import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { card } from '../assets/assets'
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";

export default function Productcard() {
    const [isfav, setIsfav] = useState(false)
    const { pid } = useParams()
    const product = card.find(p => p.id === parseInt(pid))
    const navigate=useNavigate();

    const handleclick=(id)=>{
        navigate('payment')
    }
    return (
        <div className='grid grid-cols-2 min-h-full max-h-full pt-30'>
            <div className=' ml-5 content-center'>
                <img src={product.image} className='rounded-2xl' />
            </div>
            <div className='pl-10 mr-20'>
                <h1 className='text-5xl inline-flex'>{product.name} {product.model}</h1>
                <h1 onClick={() => setIsfav(!isfav)} className=' cursor-pointer text-4xl pt-2 inline-flex float-right'>{isfav ? <MdFavorite /> : <MdFavoriteBorder />}</h1>
                <h2 className='flex mb-3 mt-3'><FaStar className='mb-3 mt-1 mr-2 text-yellow-400' />4.8 Reviews</h2>

                <h1 className='inline-flex text-3xl font-medium'>Car Details</h1> <h3 className='inline-flex float-right pt-4 cursor-pointer'>View more</h3>
                <div className='grid grid-cols-2 gap-y-10 mt-13'>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2 p-2 rounded-xl shadow-[0px_0px_10px_1px] shadow-black/10 w-3/4'>
                        <h1 className='row-span-2 text-4xl content-center'><BsFuelPumpDieselFill /></h1>
                        <p className='text-sm'>Tank size</p>
                        <h1 className='text-xl -mt-1'>{product.tank}</h1>
                    </div> 
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2  p-2 rounded-xl shadow-[0px_0px_10px_1px] shadow-black/10 w-3/4'>
                        <h1 className='row-span-2 text-4xl content-center'><GiGearStickPattern /></h1>
                        <p className='text-sm'>Gearbox</p>
                        <h1 className='text-xl -mt-1'>{product.gearbox}</h1>
                    </div>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2  p-2 rounded-xl shadow-[0px_0px_10px_1px] shadow-black/10 w-3/4'>
                        <h1 className='row-span-2 text-4xl content-center'><MdOutlineAirlineSeatReclineNormal /></h1>
                        <p className='text-sm'>Seat</p>
                        <h1 className='text-xl -mt-1'>{product.seats}</h1>
                    </div>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2 p-2 rounded-xl shadow-[0px_0px_10px_1px] shadow-black/10 w-3/4'>
                        <h1 className='row-span-2 text-4xl content-center'><GiCarDoor /></h1>
                        <p className='text-sm'>Door</p>
                        <h1 className='text-xl -mt-1'>{product.door}</h1>
                    </div>
                </div>
                <button onClick={()=>handleclick(product.id)} className='bg-amber-400 w-full h-13 text-xl cursor-pointer mt-6 rounded-4xl hover:text-yellow-400 hover:bg-white hover:shadow-[0px_0px_10px_1px] hover:shadow-black/50'>Rent Now</button>

            </div>
        </div>
    )
}
