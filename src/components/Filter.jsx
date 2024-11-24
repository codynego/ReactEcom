import React from 'react'

export const Filter = () => {
  return (
    <div className='hidden md:block w-full h-full border-2 border-gray-300 rounded-xl p-7'>
        <div className='flex items-center justify-between pb-7 border-b-2'>
            <h1 className='text-3xl'>Filter</h1>
            <i className="fa-solid fa-filter"></i>
        </div>
    </div>
  )
}
