import React from 'react'
import { useParams } from 'react-router-dom'
import { card } from '../assets/assets';

export default function Payment() {
    const {pid}=useParams();
    const product=card.find(p=>p.id===parseInt(pid))
  return (
    <div>
      pay
      <h1>{product.id}</h1>
      <h1>{product.name}</h1>
    </div>
  )
}
