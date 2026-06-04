import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Home from './component/Home'
import About from './component/About'
import MyWorks from './component/MyWorks'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full m-0 p-0 bg-slate-900 text-white font-sans'>
      <Home />
      <About/>
      <MyWorks/>
    </div>
  )
}

export default App
