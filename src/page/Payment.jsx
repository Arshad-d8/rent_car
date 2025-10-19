import React from 'react'
import { useParams } from 'react-router-dom'
import { card } from '../assets/assets';
import { LuCalendar } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { GiSwipeCard } from "react-icons/gi";

export default function Payment() {
  const { pid } = useParams();
  const product = card.find(p => p.id === parseInt(pid))
  return (
    <div className='content-center bg-red-80 min-h-full max-h-full justify-items-center'>
      <h1 className='text-4xl text-center pt-5'>Payment</h1>
      <div className='shadow-[0px_0px_20px_2px] shadow-black/20 rounded-2xl w-1/2 p-5 m-5'>
        <div className='text-white grid grid-cols-[190px_1fr] grid-rows-3 p-3 rounded-xl bg-yellow-40 mb-5 shadow-[0px_0px_20px_2px] shadow-black/20 bg-amber-400/90'>
          <img src={product.image} alt={product.name} className='h-25 w-40 row-span-3 rounded-md' />
          <h1 className='text-2xl'>{product.name}</h1>
          <h1 className='text-md'>{product.color}</h1>
          <h1 className='text-xl'>$ {product.price}/day</h1>
          <h1></h1>
        </div>
        <div>
          <h1 className='flex text-md'><LuCalendar className='mr-2 text-xl'/>Select Date</h1>
          <div className='grid grid-cols-2 grid-rows-2 mt-2 gap-x-3'>
          <input type="date"  className=' bg-black/10 rounded-xl h-11 pl-4' />
          <input type="date"  className='bg-black/10 rounded-xl h-11 pl-4' />
          <h1 className='text-gray-400 ml-2 text-sm'>Pickup Date</h1>
          <h1 className='text-gray-400 ml-2 text-sm'>Return Date</h1>
          </div>
          <div>
            <h1 className='flex text-md'><IoLocationOutline className=' text-2xl mr-2'/> Select Location</h1>
            <div className='grid grid-rows-4 mt-2'>
              <input type="text" placeholder='Type your location or search in map' className='bg-black/10 rounded-xl h-11 pl-4'/>
              <p className='text-gray-400 ml-2 text-sm'>Pickup Location</p>
              <input type="text" placeholder='Type your location or search in map' className='bg-black/10 rounded-xl h-11 pl-4'/>
              <p className='text-gray-400 ml-2 text-sm'>Return Location</p>
            </div>
            <div>
              <h1 className='flex text-md'><GiSwipeCard className=' text-2xl mr-2'/>Payment method</h1>
              <div className='grid grid-rows-2 mt-2'>
                <input type="number" placeholder='Card Number' className='bg-black/10 rounded-xl h-11 pl-4 mb-5'/>
                <input type="number" placeholder='Card Number' className='bg-black/10 rounded-xl h-11 pl-4 mb-5'/>
              </div>
            </div>
            <button className='cursor-pointer bg-amber-400 w-full rounded-xl h-11 shadow-[0px_0px_20px_2px] shadow-black/20 text-white'>Pay</button>
          </div>

        </div>
      </div>
    </div>
  )
}
