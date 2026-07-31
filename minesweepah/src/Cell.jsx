import './Cell.css'
function Cell({ x, y, hasMine, selectedCell, isSelected, nearbyMines, gameState, setGameState}) {

  const handleCellClick = (() => {
    selectedCell(x, y, isSelected)
    console.log("This is selected: ", isSelected)
    if (hasMine){
      console.log("There is a bomb here! This is now selected: ", isSelected)
      setGameState(true);
    }
  });
  return (
    <button className="cell"
    onClick={handleCellClick}
    data-testid="cell"
    data-hasmine={hasMine}
    aria-pressed={isSelected}
    disabled={gameState}>
    </button>
  );
}

export default Cell;