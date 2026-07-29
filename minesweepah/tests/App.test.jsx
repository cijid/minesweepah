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

})
