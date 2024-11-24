import React from 'react'

export const ProductCard = ({ image }) => {
  return (
    <div className='product-card duration-500 border-black rounded-2xl bg-gray-200 hover:drop-shadow-xl'>
      <img src='src/assets/316518250_11374602.png' alt="Product" className='w-full h-full object-cover rounded-2xl' />
    </div>
  )
}
