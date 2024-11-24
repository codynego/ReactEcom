import React from 'react'
import { HeroItem } from './HeroItem'
import { useNavigate } from 'react-router-dom'


export const Hero = () => {

  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/productView');
  };
  return (
    <div>
        <div className='grid grid-rows-2 w-full h-full md:max-h-screen bg-gray-200 md:grid-cols-2 md:grid-rows-1'>
          <div className='flex flex-col gap-6  p-7'>
              <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>Browse through our diverse range of meticulous crafted garments,
                  designed to bring out your individualityand cater to your sense of style.
              </p>
              <button 
                className='bg-black px-6 py-3 text-white rounded-full md:w-[200px]' 
                onClick={handleShopNowClick}
              >
                Shop Now
              </button>
              <div className='flex gap-3 flex-wrap items-center justify-center md:gap-7 md:flex-nowrap'>
                  <HeroItem heading={200} paragraph={"international Brands"}/>
                  <p className='sm:border-l-2 sm:border-black'></p>
                  <HeroItem heading={2000} paragraph={"High-Quality Products"} />
                  <p className='sm:border-l-2 sm:border-black'></p>
                  <HeroItem heading={30000} paragraph={"Happy Customers"} />
              </div>
          </div>

          <div className='header-bg'></div>
      </div>
      <div className='bg-black p-4 w-full flex gap-5 text-white text-2xl  md:text-3xl justify-evenly flex-wrap md:flex-nowrap md:p-7'>
        <h2>VERSACE</h2>
        <h2>ZARA</h2>
        <h2>GUCCI</h2>
        <h2>PRADA</h2>
        <h2>Calvin Klein</h2>
      </div>
    </div>
    
  )
}
