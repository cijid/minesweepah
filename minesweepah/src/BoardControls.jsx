

function BoardControls({ handleChangeBoardHeight, boardHeightInput,
  handleChangeBoardWidth, boardWidthInput, setBoardHeightInput, setBoardWidthInput }){





    return (
      <>
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
export default BoardControls