// import { fireEvent, render, screen } from "@testing-library/react";
import Board from "./Board";
import { shallow, mount } from 'enzyme'

describe("Basic rendering of Board", () => {
  it("Should have 9 squares", () => {

    const board = mount(<Board/>);
    expect(board.find("Square")).toHaveLength(9);
  });

  it("should render 3 rows of square boards", () => {
    const board = shallow(<Board />);
    expect(board.find(".board-row")).toHaveLength(3);
  });
});

