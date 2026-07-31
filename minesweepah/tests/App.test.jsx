import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

//Arrange - establish variables for test (user identity)
//Act - User Actions
//Assert - Validate application input/output interactions

describe("App Functionality", () => {
  beforeEach(() => {
    //Arrange
    render(<App/>);
  });

  it("renders the Application", () => {
    //Act
    //  No Act steps needed
    // Assert
    //  Check if the Minesweeper header renders on screen
    expect (screen.getByText("Minesweeper")).toBeInTheDocument();
  });

  it("the game grid exists", () => {
    // Act
    //  No Act steps needed
    // Assert
    //  Check if the grid exists on screen
    //  Check if the grid was rendered with msBoard classname
    const gameGrid = screen.getByRole("grid")
    expect(gameGrid).toBeInTheDocument();
    expect(gameGrid).toHaveClass("msBoard");
  })

it("all cells in the grid with default dimensions", () => {
  // Act
  //  No Act steps method
  // Assert
  //  Check if all cells are in grid
  const cells = screen.getAllByRole("button");
  expect(cells).toHaveLength(102);
})


it("Selecting a cell to start the game deploys mines and starts the timer ", async () => {
  //Arrange
  const user = userEvent.setup()

  const cellsBeforeClick = screen.getAllByTestId("cell")
  const firstCell = cellsBeforeClick[0]
  const timer = screen.getByTestId("timer")

  expect(firstCell).toHaveAttribute("aria-pressed", "false")
  expect(timer).toHaveAttribute("data-timer", "false")

  //Act
  await user.click(firstCell)

  //Assert
  // Clicked cell is selected
  expect(firstCell).toHaveAttribute("aria-pressed", "true")

  //Assert
  // Ten mines were deployed
  const cellsAfterClick = screen.getAllByTestId("cell")

  const cellsWithMines = cellsAfterClick.filter(
    (cell) => cell.getAttribute("data-hasmine") === "true"
  )

  expect(cellsWithMines).toHaveLength(10)

  //Assert
  // Timer is active
  expect(timer).toHaveAttribute("data-timer", "true")

})

it("Left clicking on a cell selects it", async () => {
  //Arrange
  const user = userEvent.setup();
  const cells = screen.getAllByTestId("cell")
  const firstCell = cells[0]
  expect(firstCell).toHaveAttribute("aria-pressed", "false")
  // Act
  //  User Clicks Cell
  await user.click(firstCell)
  // Assert
  //  Check if cell is selected
  expect(firstCell).toHaveAttribute("aria-pressed", "true")
  expect(firstCell).toHaveClass("cell")
})

})


