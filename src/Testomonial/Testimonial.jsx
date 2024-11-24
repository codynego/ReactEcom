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
            <button className='scroll-button hover:bg-slate-900 left md:block hidden rounded-xl' onClick={() => scrollContainer('left')}>
            <i className="fa-solid fa-left-long"></i>
            </button>
            <div className='testimonial-container grid gap-5 my-10 grid-flow-col auto-cols-[90%] md:auto-cols-[47%] lg:auto-cols-[30%] overflow-x-scroll '>
                <TestimonialCard review={3}/>
                <TestimonialCard review={4}/>
                <TestimonialCard review={2}/>
                <TestimonialCard review={3}/>
                <TestimonialCard review={4}/>
                <TestimonialCard review={2}/>
                <TestimonialCard review={3}/>
            </div>
            <button className='scroll-button right md:block hidden hover:bg-slate-900 rounded-xl' onClick={() => scrollContainer('right')}>
            <i class="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>
  )
}