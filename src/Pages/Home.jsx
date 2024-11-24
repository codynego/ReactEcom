import React from 'react'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { ProductList } from '../Products/ProductList'
import { Browse } from '../Browse'
import { Testimonial } from '../Testomonial/Testimonial'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <div className='max-w-screen'>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main className='py-20 px-10'>
        <ProductList title={"NEW ARRIVALS"} />
        <ProductList title={"TOP SELLING"} />
        <Browse />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}