import { fireEvent, render, screen } from "@testing-library/react";
import Board from "./Board";

describe("Basic rendering of Board", () => {
  it("Should have 9 squares", () => {
    render(<Board/>);
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(9);
  });

  it("Should render 3 rows of square boards", () => {
    render(<Board/>);
    const button = screen.getAllByTestId("board-row");
    expect(button).toHaveLength(3);
    
  });
});

describe("Testing square button clicking functionality", () => {
    
    it("Should be able to click button",()=>{
        render(<Board/>);
        const button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
    });
    it("Should be alternate X and O for odd and even turns",()=>{
        render(<Board/>);
        const button = screen.getAllByRole("button")[0];
        fireEvent.click(button);
        expect(button.textContent).toBe("X");
        fireEvent.click(button);
        expect(button.textContent).toBe("O");

    });
  });

  describe("Testing functionality of status button", () => {
    it("Should render Next Player: X initially", () => {
      render(<Board />);
      const textValue = screen.getByTestId("status");
      expect(textValue.textContent).toEqual("Next player: X");
    });
  
    it("Should render Next Player: O after first click", () => {
      render(<Board />);
      fireEvent.click(screen.getByTestId('square-0'))
      const textValue = screen.getByTestId("status");
      expect(textValue.textContent).toEqual("Next player: O");
    })
  });

  describe("Testing for winner", () => {
    it("Should render Winner: X when player X wins", () => {
      render(<Board />);
      fireEvent.click(screen.getByTestId("square-0")); // X on square 0
      fireEvent.click(screen.getByTestId("square-1")); // O on square 1
      fireEvent.click(screen.getByTestId("square-4")); // X on square 4
      fireEvent.click(screen.getByTestId("square-2")); // O on square 2
      fireEvent.click(screen.getByTestId("square-8")); // X on square 8
  
      // At this stage X should have won
      const textValue = screen.getByTestId("status");
      expect(textValue.textContent).toEqual("Winner: X");
      
    });
  
    it("Should render Winner: O when player O wins", () => {
      render(<Board />);
      fireEvent.click(screen.getByTestId("square-0")); // X on square 0
      fireEvent.click(screen.getByTestId("square-6")); // O on square 6
      fireEvent.click(screen.getByTestId("square-8")); // X on square 8
      fireEvent.click(screen.getByTestId("square-4")); // O on square 4
      fireEvent.click(screen.getByTestId("square-7")); // X on square 7
      fireEvent.click(screen.getByTestId("square-2")); // O on square 2
  
      // At this stage O should have won
      const textValue = screen.getByTestId("status");
      expect(textValue.textContent).toEqual("Winner: O");
     
    });
  });


