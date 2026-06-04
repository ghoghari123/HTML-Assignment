import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Components/Home'
import ThemeProvide from './Components/Toggle_Theme/ThemeContext'
import Parent from './Components/Parent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <ThemeProvide>
        {/* <Parent userid = {userid}/> */}
        <Parent userid={userid} />
      </ThemeProvide>
    </>
  )
}

export default App
