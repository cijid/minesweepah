import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './gameboard.css'
import Cell from './Cell'

function GameBoard({ board }) {

  const boardHeight = board[0]
  const boardWidth = board[1]
  const [boardDimensions, setBoardDimensions] = useState([]);


  useEffect(() => {
    const mineBoard = [];

    for (let row = 0; row < boardHeight; row++) {
      mineBoard[row] = [];

      for (let column = 0; column < boardWidth; column++) {
        mineBoard[row][column] = false;
      }
    }

    setBoardDimensions(mineBoard);
  }, [boardHeight, boardWidth]);



  return (
    <>
      <p>Height: {boardHeight} and Width: {boardWidth} </p>
      <div
        className="msBoard"
        style={{
          gridTemplateColumns: `repeat(${boardWidth}, 60px)`,
          gridTemplateRows: `repeat(${boardWidth}, 60px)`,
        }}
      >
        {boardDimensions.map((row, rowIndex) =>
          row.map((hasMine, columnIndex) => (
            <Cell key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex} hasMine={hasMine}/>
          ))
        )}
      </div>









    </>
  )
}


export default GameBoard