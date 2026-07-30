import './Cell.css'
import {useEffect} from 'react'

function Cell({ x, y, hasMine, selectedCell, isSelected }) {


  //OnClick - Clear first cell, set mines randomly, clear empty spaces adjacent to first cell, start timer

  const handleCellClick = (() => {
 if (hasMine) {
        console.log('You selected a bomb!')
      }
    selectedCell(x, y)
  });


  return (
    <button className="cell" onClick={handleCellClick} >

    </button>
  );
}

export default Cell;