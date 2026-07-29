import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [gameState, setGameState] = useState(null)

  return (
    <>
    <h1 className="gameName">Minesweeper</h1>
    </>
  )
}

export default App
