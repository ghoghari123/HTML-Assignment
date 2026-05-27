import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './component/Home'
import About from './component/About'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900 text-sans text-white'>
      <Home />
      <About/>
    </div>
  )
}

export default App
