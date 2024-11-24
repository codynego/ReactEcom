import React from 'react'
import { TestimonialCard } from './TestimonialCard'

export const Testimonial = () => {
  const scrollContainer = (direction) => {
    const container = document.querySelector('.testimonial-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className='py-20'>
        <h1 className='text-4xl md:text-6xl'>OUR HAPPY CUSTOMERS</h1>
        <div className='relative'>
            <button className='scroll-button left md:block hidden' onClick={() => scrollContainer('left')}>‹</button>
            <div className='testimonial-container grid gap-5 my-10 grid-flow-col auto-cols-[90%] md:auto-cols-[30%] overflow-x-scroll'>
                <TestimonialCard review={3}/>
                <TestimonialCard review={4}/>
                <TestimonialCard review={2}/>
                <TestimonialCard review={3}/>
                <TestimonialCard review={4}/>
                <TestimonialCard review={2}/>
                <TestimonialCard review={3}/>
            </div>
            <button className='scroll-button right md:block hidden' onClick={() => scrollContainer('right')}>›</button>
        </div>
    </div>
  )
}