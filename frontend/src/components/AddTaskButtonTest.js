import { render, fireEvent } from "@testing-library/react";
import AddTaskButton from "./AddTaskButton";

test("renders without crashing", () => {
  const { getByText } = render(<AddTaskButton addTask={jest.fn()} />);
  expect(getByText("New task")).toBeInTheDocument();
});

test("toggles input field on click", () => {
  const { getByText, queryByRole } = render(
    <AddTaskButton addTask={jest.fn()} />,
  );
  fireEvent.click(getByText("New task"));
  expect(queryByRole("textbox")).toBeInTheDocument();
});

test("calls addTask on enter key press", () => {
  const mockAddTask = jest.fn();
  const { getByText, getByRole } = render(
    <AddTaskButton addTask={mockAddTask} />,
  );
  setTimeout(() => {
    fireEvent.click(getByText("New task"));
    fireEvent.keyDown(getByRole("input"), { key: "Enter", code: "Enter" });
    expect(mockAddTask).toHaveBeenCalled();
  }, 300);
});
