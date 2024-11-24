import React from 'react'

export const TestimonialCard = ({review}) => {
  return (
    <div className='border-[2px] rounded-2xl h-[200px] md:h-[250px] px-5 py-7 gap-4 md:px-7 md:py-10 flex flex-col'>
        <div className='flex gap-2'>
            {Array.from({ length: 5}).map((_, index) => (
                index < review ? <i key = {index} className="fa-solid fa-star text-amber-500 fa-lg"></i> : <i key = {index} className="fa-regular fa-star fa-lg"></i> 
                
            ))}
        </div>
        <h2 className='text-black text-xl md:text-2xl font-semibold'>Sarah Udoh</h2>
        <p className='overflow-hidden'>Lorem ipsum dolor sit amet. ex odio perspiciatis fugiat omnis debitis nisi alias sed adipisci earum expedita et ducimus! Unde ea voluptas ratione et quaerat.</p>
    </div>
  )
}
