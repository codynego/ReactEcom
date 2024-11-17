import React from 'react'
import { HeroItem } from './HeroItem'

export const Hero = () => {
  return (
    <div className='grid grid-cols-2 w-full h-screen bg-gray-200 p-10'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-8xl font-bold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulous crafted garments,
                designed to bring out your individualityand cater to your sense of style.
            </p>
            <button className='bg-black px-6 py-3 text-white rounded-full w-[200px]'>Shop Now</button>
            <div className='flex gap-7'>
                <HeroItem heading={200} paragraph={"international Brands"} />
                <p className='border-l-2 border-black'></p>
                <HeroItem heading={2000} paragraph={"High-Quality Products"} />
                <p className='border-l-2 border-black'></p>
                <HeroItem heading={30000} paragraph={"Happy Customers"} />
            </div>
        </div>

        <div className='header-bg'></div>
        <div className='bg-black p-10 w-full '></div>
    </div>
    
  )
}
