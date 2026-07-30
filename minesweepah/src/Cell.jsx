import './Cell.css'
function Cell({ x, y, hasMine, selectedCell, isSelected }) {

  const handleCellClick = (() => {
    selectedCell(x, y)


  });


  return (
    <button className="cell" onClick={handleCellClick} data-testid="cell" data-hasmine={hasMine} aria-pressed={isSelected}>
    </button>
  );
}

export default Cell;