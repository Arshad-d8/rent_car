import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
    return (
        <div className='grid grid-cols-2 min-h-screen max-h-full content-center'>
            <div className='content-center ml-5'>
                <img src={product.image} className='rounded-2xl' />
            </div>
            <div className='pl-10 mr-20'>
                <h1 className='text-6xl inline-flex'>{product.name} {product.model}</h1>
                <h1 onClick={() => setIsfav(!isfav)} className=' cursor-pointer text-4xl pt-2 inline-flex float-right'>{isfav ? <MdFavorite /> : <MdFavoriteBorder />}</h1>
                <h2 className='flex mb-3 mt-3'><FaStar className='mb-3 mt-1 mr-2 text-yellow-400' />4.8 Reviews</h2>

                <h1 className='inline-flex text-3xl font-medium'>Car Details</h1> <h3 className='inline-flex float-right pt-4 cursor-pointer'>View more</h3>
                <div className='grid grid-cols-2 gap-y-10 mt-13'>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2 '>
                        <h1 className='row-span-2 text-4xl content-center'><BsFuelPumpDieselFill /></h1>
                        <p className='text-sm'>Tank size</p>
                        <h1 className='text-xl'>{product.tank}</h1>
                    </div>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2 '>
                        <h1 className='row-span-2 text-4xl content-center'><GiGearStickPattern /></h1>
                        <p className='text-sm'>Gearbox</p>
                        <h1 className='text-xl'>{product.gearbox}</h1>
                    </div>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2 '>
                        <h1 className='row-span-2 text-4xl content-center'><MdOutlineAirlineSeatReclineNormal /></h1>
                        <p className='text-sm'>Seat</p>
                        <h1 className='text-xl'>{product.seats}</h1>
                    </div>
                    <div className='grid grid-cols-[50px_1fr] grid-rows-2'>
                        <h1 className='row-span-2 text-4xl content-center'><GiCarDoor /></h1>
                        <p className='text-sm'>Door</p>
                        <h1 className='text-xl'>{product.door}</h1>
                    </div>
                </div>
                <button className='bg-yellow-400 w-full h-13 text-xl cursor-pointer mt-6 rounded-4xl'>Rent Now</button>

            </div>
        </div>
    )
}
