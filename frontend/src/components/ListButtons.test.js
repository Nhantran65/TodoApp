import { render, fireEvent, waitFor } from "@testing-library/react";
import ListButtons from "./ListButtons";

// written fully with chatgpt

describe("ListButtons", () => {
  const mockSetList = jest.fn();
  const mockSetIsUpdated = jest.fn();
  const mockList = { _id: "123", name: "Test List" };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ _id: "123", name: "Updated Test List" }),
        status: 200,
      }),
    );
  });

  it("renders without crashing", () => {
    render(
      <ListButtons
        list={mockList}
        setList={mockSetList}
        setIsUpdated={mockSetIsUpdated}
      />,
    );
  });

  it("updates the list when Update button is clicked", async () => {
    const { getByText } = render(
      <ListButtons
        list={mockList}
        setList={mockSetList}
        setIsUpdated={mockSetIsUpdated}
      />,
    );
    fireEvent.click(getByText("Update"));

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/api/v1/task/list/${mockList._id}`,
      expect.any(Object),
    );
  });

  it("saves the list when Save button is clicked", async () => {
    const { getByText } = render(
      <ListButtons
        list={mockList}
        setList={mockSetList}
        setIsUpdated={mockSetIsUpdated}
      />,
    );
    fireEvent.click(getByText("Save"));

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/api/v1/task/list`,
      expect.any(Object),
    );
  });

  it("loads a list when Load is clicked and an ID is entered", async () => {
    const { getByText, getByPlaceholderText } = render(
      <ListButtons
        list={mockList}
        setList={mockSetList}
        setIsUpdated={mockSetIsUpdated}
      />,
    );

    fireEvent.click(getByText("Load"));
    fireEvent.change(getByPlaceholderText("Enter list ID"), {
      target: { value: "123" },
    });
    fireEvent.keyDown(getByPlaceholderText("Enter list ID"), {
      key: "Enter",
      code: "Enter",
    });

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_URL}/api/v1/task/list/123`,
    );
  });
});
