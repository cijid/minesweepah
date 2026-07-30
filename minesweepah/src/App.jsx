import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GameBoard from './GameBoard'
import { Link, Route, Routes} from 'react-router-dom'
import Timer from './Timer'

function App() {
  const [gameState, setGameState] = useState(null)
  const [board, setBoard] = useState([10,10])
  const [boardHeightInput, setBoardHeightInput] = useState("10");
  const [boardWidthInput, setBoardWidthInput] = useState("10");

  const handleChangeBoardHeight = (event) => {
    event.preventDefault();
    const newHeight = boardHeightInput;
    setBoard([newHeight, board[1]]);
  }

    const handleChangeBoardWidth = (event) => {
    event.preventDefault();
    const newWidth = boardWidthInput;
    setBoard([board[0], newWidth]);
  }

  return (
    <>
    <h1 className="gameName">Minesweeper</h1>
    <GameBoard board={board}/>
    <Timer />
    <form onSubmit={handleChangeBoardHeight}>
      <input type="text" value={boardHeightInput} onChange={(event) => setBoardHeightInput(event.target.value)} placeholder="Enter a value if you so wish dude"/>
      <button type="submit">Change yo height homie</button>

    </form>
    <form onSubmit={handleChangeBoardWidth}>
      <input type="text" value={boardWidthInput} onChange={(event) => setBoardWidthInput(event.target.value)} placeholder="Enter a value if you so wish dude"/>
      <button type="submit">Get Skinny</button>
    </form>

    </>
  )
}

export default App
