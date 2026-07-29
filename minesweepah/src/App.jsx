import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GameBoard from './GameBoard'
import { Link, Route, Routes} from 'react-router-dom'


function App() {
  const [gameState, setGameState] = useState(null)
  const [board, setBoard] = useState([8,8])

  return (
    <>
    <h1 className="gameName">Minesweeper</h1>
    <GameBoard board={board}/>
    </>
  )
}

export default App
