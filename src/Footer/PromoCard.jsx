import React from 'react'

export const PromoCard = () => {
  return (
    <div className='relative'>
      <div className='flex justify-center items-center absolute bottom-[-50%] w-full md:px-10'>
        <div className='py-5 flex flex-col lg:flex-row  bg-black custom-width text-white px-10 rounded-2xl transform translate-y-1/2 md:justify-between md:items-center gap-5'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl  sm:text-center lg:text-left'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

          <div className='flex flex-col gap-3 mb-5'>
            <label className='flex gap-2 items-center rounded-full p-2 md:p-3 bg-white md:gap-8 md:w-[400px] overflow-hidden'>
              <i className="fa-solid fa-envelope text-black"></i>
              <input type="email" placeholder="Enter your email address" className="text-black flex-1 outline-none" />
            </label>
            <button className='p-2 md:p-3 rounded-full bg-white text-black font-semibold text-base md:text-lg w-full'>
              <p>Subscribe to Newsletter</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}