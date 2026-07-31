

function BoardControls({ handleChangeBoardHeight, boardHeightInput,
  handleChangeBoardWidth, boardWidthInput, setBoardHeightInput, setBoardWidthInput, gameState }){

    return (
      <>
    <form onSubmit={handleChangeBoardHeight} disabled={gameState}>
      <input type="text" value={boardHeightInput} onChange={(event) => setBoardHeightInput(event.target.value)} disabled={gameState} placeholder="Enter a value if you so wish dude"/>
      <button type="submit" disabled={gameState}>Change Height</button>

    </form>
    <form onSubmit={handleChangeBoardWidth} disabled={gameState}>
      <input type="text" value={boardWidthInput} onChange={(event) => setBoardWidthInput(event.target.value)} disabled={gameState} placeholder="Enter a value if you so wish dude"/>
      <button type="submit" disabled={gameState}>Change Width</button>
    </form>
    </>
    )
}
export default BoardControls