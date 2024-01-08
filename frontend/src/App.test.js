import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders react todo header", () => {
  render(<App />);
  const headerElement = screen.getByText(/My Todo App/i);
  expect(headerElement).toBeInTheDocument();
});
