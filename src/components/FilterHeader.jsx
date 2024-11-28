import React from 'react'

export const FilterHeader = ({title, icons}) => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl'>{title}</h1>
        <i className={`${icons}`}></i>
    </div>
  )
}
