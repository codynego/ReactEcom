import React from 'react'

export const ButtonMain = ({content}) => {
  return (
    <div className='flex justify-center items-center w-full md:w-1/2 lg:w-1/4 '>
        <button className='bg-transparent w-full  border-[1px] border-black rounded-full px-28 py-3 md: mb-7 font-semibold hover:bg-black hover:text-white duration-300'>{content}</button>
    </div>
  )
}
