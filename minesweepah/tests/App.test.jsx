import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";


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
  expect(cells).toHaveLength(64);
})

it("On-left click the button clears cell or interacts with bomb", () => {
  // Act
  //  No Act steps method
  // Assert
  //  Check if all cells are in grid
})

it("On-left click the timer begins incrementing", () => {
  // Act
  //  No Act steps method
  // Assert
  //  Check if all cells are in grid
})

it("On-right click the Mine counter decreases", () => {
  // Act
  //  No Act steps method
  // Assert
  //  Check if all cells are in grid
})

it("On-right click a flag is added to cell", () => {
  // Act
  //  No Act steps method
  // Assert
  //  Check if all cells are in grid
})

})
