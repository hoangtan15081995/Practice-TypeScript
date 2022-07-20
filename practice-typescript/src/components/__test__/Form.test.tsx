import react, { SetStateAction } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Form";
import { IProps } from "../Form";
import userEvent from "@testing-library/user-event";

describe("test form exist", () => {

  test("render text form success", () => {
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
})

describe("test change value name, age, bio success", () => {

  test("change name value", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    }} />);
    const inputName = screen.getByPlaceholderText("name");
    fireEvent.change(inputName, { target: { value: "Tan" } });
    expect(inputName).toHaveProperty("value", "Tan")
  });

  test("change age value", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    }} />);
    const inputAge = screen.getByPlaceholderText("age");
    fireEvent.change(inputAge, { target: { value: "27" } });
    expect(inputAge).toHaveProperty("value", "27")
  });

  test("change bio value", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    }} />);
    const inputBio = screen.getByPlaceholderText("Bio Description");
    fireEvent.change(inputBio, { target: { value: "Developer" } });
    expect(inputBio).toHaveProperty("value", "Developer")
  });

  test("onSubmit is called when all field pass validation", () => {
    render(<Form people={[]} setPeople={function (value: SetStateAction<{ name: string; age: number; bio: string; }[]>): void {
      throw new Error("Function not implemented.");
    }} />);
    const form = screen.getByRole("form");
    // const inputName = screen.getByPlaceholderText("name");
    // fireEvent.change(inputName, { target: { value: "Tan" } });
    // const inputAge = screen.getByPlaceholderText("age");
    // fireEvent.change(inputAge, { target: { value: "27" } });
    // const inputBio = screen.getByPlaceholderText("Bio Description");
    // fireEvent.change(inputBio, { target: { value: "Developer" } });
    // const { onsubmit } = form;
    fireEvent.click(form);
  });
})

