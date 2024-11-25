import React from 'react'

export const FilterHeader = ({title, icons}) => {
  return (
    <div className='flex items-center justify-between py-5 border-b-2 border-gray-300'>
        <h1 className='text-3xl'>{title}</h1>
        <i className={`${icons}`}></i>
    </div>
  )
}
