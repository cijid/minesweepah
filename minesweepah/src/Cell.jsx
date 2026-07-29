  import './Cell.css'

  function Cell({ x, y, hasMine }) {
  return (
    <button className="cell">
      {hasMine ? "boom" : ""}
    </button>
  );
}

export default Cell;