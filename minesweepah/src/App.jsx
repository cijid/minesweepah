import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GameBoard from './GameBoard'
import { Link, Route, Routes} from 'react-router-dom'
import Timer from './Timer'
import BoardControls from './BoardControls'

function App() {
  const [gameState, setGameState] = useState(false)
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
    <GameBoard board={board}
    gameState={gameState}
    setGameState={setGameState}/>
    <BoardControls
    handleChangeBoardHeight={handleChangeBoardHeight}
    boardHeightInput={boardHeightInput}
    handleChangeBoardWidth={handleChangeBoardWidth}
    boardWidthInput={boardWidthInput}
    setBoardHeightInput={setBoardHeightInput}
    setBoardWidthInput={setBoardWidthInput}
    gameState={gameState}
    />
    </>
  )
}

export default App
