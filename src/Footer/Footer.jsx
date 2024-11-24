import React from 'react'
import { PromoCard } from './PromoCard'
import { FooterMain } from './FooterMain'

export const Footer = () => {
  return (
    <div className='relative bg-gray-200 w-full h-full'>
        <PromoCard/>
        <div className='p-5 w-full'>
            <FooterMain/>
        </div>
    </div>
  )
}
