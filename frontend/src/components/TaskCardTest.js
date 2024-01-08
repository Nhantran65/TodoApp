import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "./TaskCard";

const task = {
  _id: 0,
  title: "Test task",
  done: false,
};


test("renders task card", () => {
    const { getByText } = render(
      <TaskCard task={task} toggleTask={jest.fn()} deleteTask={jest.fn()} />,
    );
    expect(getByText("Test task")).toBeInTheDocument();
  });
  
  test("toggles task", () => {
    const toggleTask = jest.fn();
    const { getByTestId } = render(
      <TaskCard task={task} toggleTask={toggleTask} deleteTask={jest.fn()} />,
    );
    fireEvent.click(getByTestId("task"));
    expect(toggleTask).toHaveBeenCalled();
  });
  
  test("deletes task", () => {
    const deleteTask = jest.fn();
    const { getByTestId } = render(
      <TaskCard task={task} toggleTask={jest.fn()} deleteTask={deleteTask} />,
    );
    fireEvent.click(getByTestId("delete-button"));
    expect(deleteTask).toHaveBeenCalled();
  });
  