import React from 'react'
import { ProductCard } from './ProductCard'
import { ButtonMain } from '../components/ButtonMain'

export const ProductList = ({title}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
        <h1 className='text-4xl md:text-6xl'>{title}</h1>
        <div className='product-list grid grid-flow-col auto-cols-[67%] gap-4 overflow-x-auto md:auto-cols-[22%] md:gap-12 md:place-items-center md:m-auto'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <ButtonMain content={"View all"}/>
    </div>
  )
}
