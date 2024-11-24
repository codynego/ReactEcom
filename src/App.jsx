import { useState } from 'react'
import { NavBar } from './components/NavBar'
import './index.css'
import { Hero } from './components/Hero'
import { ProductList } from './Products/ProductList'
import { Browse } from './Browse'
import { Testimonial } from './Testomonial/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-screen'>
      <header>
        <NavBar/>
        <Hero/>
      </header>
      <main className='py-20 px-10'>
        <ProductList title={"NEW ARRIVALS"}/>
        <ProductList title={"TOP SELLING"}/>
        <Browse/>
        <Testimonial/>
      </main>

    </div>
  )
}

export default App
