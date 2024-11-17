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

    </div>
  )
}

export default App
