import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Index from './Components/Index'
import { Details } from './Components/Blogs'
import About from './Components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to 🔰</h1>
      <Index />
      <br />
      <Details />
      <br /><br /><br />
      <About />
      <br />
    </>
  )
}

export default App
