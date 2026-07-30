
import { useState, useEffect } from 'react'

import './Cell.css'

function Cell({ x, y, hasMine, selectedCell}) {



//OnClick - Clear first cell, set mines randomly, clear empty spaces adjacent to first cell

const handleCellClick = (() => {
selectedCell(x,y);
console.log("Selected Cell is: ", x, y)

})


    return (
    <button className="cell" onClick={handleCellClick}>
      {hasMine ? "boom" : ""}
    </button>
  );
}

export default Cell;