import react from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import List from "../List";

describe("test list exist", () => {
  
  test("render text list success", () => {
    render(<List people={[]} />)
    const linkElement = screen.getByText(/list/i);
    expect(linkElement).toBeInTheDocument();
  });

  // test("render list person not exist", () => {
  //   render(<List people={[]} />)
  //   const linkElement = screen.getByRole("div");
  //   expect(linkElement).not.toBeInTheDocument();
  // });
})