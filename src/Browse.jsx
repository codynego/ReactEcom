import React from 'react'
import { BrowseCard } from './BrowseCard'

export const Browse = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className='text-4xl md:text-6xl'>Browse By Dress style</h1>
      <div className='p-5 gap-6 bg-gray-200 w-full rounded-lg grid grid-cols-1 md:grid-cols-3'>
        <BrowseCard/>
        <BrowseCard span={true}/>
        <BrowseCard span={true}/>
        <BrowseCard/>
      </div>
    </div>
  )
}
