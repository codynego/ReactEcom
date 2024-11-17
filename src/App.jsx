import { useState } from 'react'
import { NavBar } from './components/NavBar'
import './index.css'
import { Hero } from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <NavBar/>
        <Hero/>
      </header>
      <h1>New arrival</h1>

    </div>
  )
}

export default App
