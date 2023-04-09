import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ItemList from "./pages/itemList/ItemList";
import Search from "./components/search/Search";
import { Provider } from "react-redux";
import store from "./store/index";
describe("ItemList", () => {
  test("renders Loading test component in list page", () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
    const loadingText = screen.getByText("Loading products...");
    expect(loadingText).toBeInTheDocument();
  });
  test("renders list page ", async () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
    await waitFor(() => {
      const listPage = screen.findByTestId("item-list-test");
      expect(listPage).toBeDefined();
    });
  });
  test("clicking on sort dropdown should trigger a sort action", async () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
    await waitFor(() => {
      const dropdownPromise = screen.findByTestId("sort-dropdown");
      expect(dropdownPromise).toBeDefined();
      dropdownPromise.then((dropdown) => {
        fireEvent.click(dropdown);
      });
    });
  });
});

describe("Search", () => {
  test("renders label and input", () => {
    const handleSearchMock = jest.fn();
    render(<Search handleSearch={handleSearchMock} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("updates search term on input change", () => {
    const handleSearchMock = jest.fn();
    render(<Search handleSearch={handleSearchMock} />);
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
