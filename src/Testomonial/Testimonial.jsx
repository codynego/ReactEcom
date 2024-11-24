import React from 'react'
import { TestimonialCard } from './TestimonialCard'

export const Testimonial = () => {
  return (
    <div className='py-20'>
        <h1 className='text-4xl md:text-6xl'>OUR HAPPY CUSTOMERS</h1>
        <div className=' testimonial-container grid md:grid-cols-3 gap-5 my-10 grid-flow-col auto-cols-[90%] overflow-x-scroll'>
            <TestimonialCard review={3}/>
            <TestimonialCard review={4}/>
            <TestimonialCard review={2}/>
        </div>
    </div>
  )
}
