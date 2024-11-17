import React from 'react'

export const HeroItem = ({heading, paragraph}) => {
  return (
    <div className=''>
        <h2 className='text-4xl font-medium '>{heading}+</h2>
        <p>{paragraph}</p>
    </div>
  )
}
