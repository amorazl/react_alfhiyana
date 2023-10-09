import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import CreateProduct from "../pages/CreateProduct";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store/store";

test("productName accepts input and displays it", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );
  const productNameInput = screen.getByLabelText("Product Name");

  //Act
  const inputValue = "Test Product Name";
  fireEvent.change(productNameInput, { target: { value: inputValue } });

  // Assert
  expect(productNameInput.value).toBe(inputValue);
});

test("productCategory input is valid to save and display", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );
  const productCategorySelect = screen.getByLabelText("Product Category");
  const selectedCategory = "Jewelry";

  fireEvent.change(productCategorySelect, { target: { value: selectedCategory } });

  expect(screen.getByDisplayValue(selectedCategory)).toBeInTheDocument();
});

test("validates Product Name input correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );

  // invalid characters in Product Name
  const productNameInput = screen.getByLabelText("Product Name");
  fireEvent.change(productNameInput, { target: { value: "@Product#Name{}" } });

  // symbols in Product Name
  const invalidCharacterError = screen.getByText("Input contains symbols. Symbols are not allowed.");
  expect(invalidCharacterError).toBeInTheDocument();
  fireEvent.change(productNameInput, { target: { value: "ValidProductName" } });

  // input more than 25 chars
  expect(screen.queryByText("Input must be 25 characters or less.")).toBeNull();
  fireEvent.change(productNameInput, { target: { value: "ThisIsAProductNameThatIsTooLong" } });

  const productNameError = screen.getByText("Input must be 25 characters or less.");
  expect(productNameError).toBeInTheDocument();

  fireEvent.change(productNameInput, { target: { value: "ValidProductName" } });

  expect(screen.queryByText("This field is required.")).toBeNull();
  expect(screen.queryByText("Input contains symbols. Symbols are not allowed.")).toBeNull();
  expect(screen.queryByText("Input must be 25 characters or less.")).toBeNull();
});

test("validates all form fields are not empty", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.queryByText("This field is required")).toBeNull();

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  const fields = [
    "Product Name",
    "Product Category",
    "Product Image",
    "Product Freshness",
    "Additional Description",
    "Product Price",
  ];

  fields.forEach((field) => {
    const label = screen.getByLabelText(field);
    fireEvent.change(label, { target: { value: "" } });
    const error = screen.getByText("This field is required.");
    expect(error).toBeInTheDocument();
  });
});

test("displays error message when data saving fails", async () => {
  const mockSaveFunction = jest.fn();
  mockSaveFunction.mockImplementation(() => {
    throw new Error("Failed to save data");
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProduct onSave={mockSaveFunction} />
      </MemoryRouter>
    </Provider>
  );

  const productNameInput = screen.getByLabelText("Product Name");
  fireEvent.change(productNameInput, { target: { value: "ValidProductName" } });

  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);

  const errorMessage = await screen.findByText("Failed to save data");
  expect(errorMessage).toBeInTheDocument();
});
