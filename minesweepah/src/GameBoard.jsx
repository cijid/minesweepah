import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './gameboard.css'
import Cell from './Cell'
import Timer from './Timer'

function GameBoard({ board, gameState, setGameState }) {
  const boardHeight = board[0]
  const boardWidth = board[1]
  const [boardDimensions, setBoardDimensions] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);


  //Create Array of Arrays to generate grid
  useEffect(() => {
    const mineBoard = [];
    for (let row = 0; row < boardHeight; row++) {
      mineBoard[row] = [];
      for (let column = 0; column < boardWidth; column++) {

  // Creates an object representing each grid square
        mineBoard[row][column] = {
          x: column,
          y: row,
          hasMine: false,
          isSelected: false,

        }
      }
    }
    setBoardDimensions(mineBoard);
  }, [boardHeight, boardWidth]);

  //Handles Cell Selection
  const selectedCell = (clickX, clickY) => {
  //Causes timer to start
  const firstClick = !gameStarted

    setBoardDimensions(boardDimensions.map((row, rowIndex) =>
      row.map((cell) => {
        if (cell.x === clickX && cell.y === clickY) {
          return {
            ...cell,
            isSelected: true,
          }
        }
        return cell;
      })
    )
  )
  if (firstClick) {
    //Handles adding mines
  const addMines = () => {
    setBoardDimensions((currentBoard) => {
    const minedBoard = currentBoard.map((row, rowIndex) =>
      row.map((cell) => {
        return { ...cell }
      }))

//Add mine count to board
//  Need to come back and make this dynamic based on difficulty selected
    const minesDeploy = boardHeight * boardWidth
    let totalMines = Math.min(10, minesDeploy)
    let mines = 0

    // Deploy the mines to the board in random locations.
    while (mines < totalMines) {
      const randomRow = Math.floor((Math.random() * boardHeight))
      const randomCol = Math.floor((Math.random() * boardWidth))
      if (!minedBoard[randomRow][randomCol].hasMine) {
        minedBoard[randomRow][randomCol].hasMine = true
        console.log("Mines are located here: ",minedBoard[randomRow][randomCol])
        mines++;
      }
    }
    return minedBoard;
    })
  }

addMines()
  }

      if (firstClick){
      setGameStarted(true)
    }
    console.log(`Cell: x=${clickX}, y=${clickY}`)
  }




  return (
    <>
      <p>Height: {boardHeight} and Width: {boardWidth} </p>

      {/* <button type="button" onClick={addMines}> Lets go! </button> */}

      <div
        className="msBoard"
        role="grid"
        style={{
          gridTemplateColumns: `repeat(${boardWidth}, 60px)`,
          gridTemplateRows: `repeat(${boardHeight}, 60px)`,
        }}
      >
        {boardDimensions.map((row) =>
          row.map((cell) => (
            <Cell key={`${cell.y}-${cell.x}`} x={cell.x} y={cell.y} hasMine={cell.hasMine} selectedCell={selectedCell} isSelected={cell.isSelected}/>
          ))
        )}
      </div>
      <Timer when={gameStarted} />
    </>
  )
}


export default GameBoard