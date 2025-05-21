import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../../app/App";

describe("Todo filtering", () => {
  beforeAll(() => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("What needs to be done?");

    fireEvent.change(inputElement, { target: { value: "Task 1" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    fireEvent.change(inputElement, { target: { value: "Task 2" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    const checkboxes = screen.getAllByTestId("todo-checkbox");
    fireEvent.click(checkboxes[0]);
  });

  test("filter 'Active' shows only active tasks", () => {
    fireEvent.click(screen.getByText("Active"));

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Task 2")).toBeInTheDocument();
  });

  test("filter 'Completed' shows only completed tasks", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Completed"));

    expect(screen.queryByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
  });

  test("filter 'All' shows all tasks", () => {
    render(<App />);
    fireEvent.click(screen.getByText("All"));

    expect(screen.queryByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).toBeInTheDocument();
  });

  test("Clear completed tasks", () => {
    render(<App />);
    const checkboxes = screen.getAllByTestId("todo-checkbox");
    fireEvent.click(screen.getByText("All"));
    fireEvent.click(checkboxes[1]);

    fireEvent.click(screen.getByText("Clear completed"));

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
  });
});
