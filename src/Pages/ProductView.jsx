import React from 'react'
import { Filter } from '../components/Filter'
import { ProductCard } from '../Products/ProductCard'
import { Footer } from '../Footer/Footer'
import { NavBar } from '../components/NavBar'
import { PaginationRounded } from '../components/PaginationRounded';

export const ProductView = () => {
  return (
    <div className='max-w-screen px-10'>
        <NavBar/>
        <div className='pt-10 px-10 pb-20 w-full h-full flex flex-col gap-5'>
            <p>Home&gt;Casual</p>
            <div className='pb-32 md:pb-24 grid grid-cols-1 md:gap-12 md:grid-cols-3 lg:grid-cols-4  '>
                <Filter/>
                <div className='w-full flex flex-col flex-1 md:col-span-2 lg:col-span-3 gap-3 '>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-4xl'>Casual</h1>
                        <p className='text-gray-400'>Showing 1-10 of 100 Products</p>
                        <p className='text-gray-400'>Sort by: 
                            <span className='font-semibold text-black'>
                                <select name="cars" id="cars" className='border-none outline-none'>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </span></p>
                        <i className="fa-solid fa-filter md:hidden"></i>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 col-span-2  gap-4'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>

                    <div className="flex justify-center items-center w-full p-10">
                        <PaginationRounded/>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}
