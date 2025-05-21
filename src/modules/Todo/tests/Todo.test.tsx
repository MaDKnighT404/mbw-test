import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../../app/App";

describe("Todo functionality", () => {
  test("adding a new task", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("What needs to be done?");

    fireEvent.change(inputElement, { target: { value: "My new task" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(screen.getByText("My new task")).toBeInTheDocument();

    expect(inputElement).toHaveValue("");
  });
});
