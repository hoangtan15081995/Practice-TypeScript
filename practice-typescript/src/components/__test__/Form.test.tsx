import react, { SetStateAction } from "react";
import { render, screen } from "@testing-library/react";
import Form from "../Form";
import { IProps } from "../Form";
import userEvent from "@testing-library/user-event";

describe("test form", () => {

  test("render form success", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    } } />);
    const linkElement = screen.getByText(/Form/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render input name success", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    } } />);
    const linkElement = screen.getByPlaceholderText("name")
    expect(linkElement).toBeInTheDocument();
  });
  
  test("render input age success", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    } } />);
    const linkElement = screen.getByPlaceholderText("age")
    expect(linkElement).toBeInTheDocument();
  });

  test("render textarea description success", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    } } />);
    const linkElement = screen.getByPlaceholderText("Bio Description")
    expect(linkElement).toBeInTheDocument();
  });

  test("render button submit success",() => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    } } />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("click button submit success",() => {
    render(<Form />);
    const button = screen.getByText("Submit");
    userEvent.click(button);
    expect(button).toBeCalled();
  });
})