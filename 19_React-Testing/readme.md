# Summary

### Testing

Merupakan proses memverifikasi bahwa code yang kita buat berjalan dengan baik sepanjang aplikasi. Manfaat melakukan testing:

- Jika ingin mengubah suatu bagian, kita dapat percaya diri dan cepat mengetahui bagian mana yang bermasalah jika ada bug
- Mengurangi bug pada aplikasi
- Memastikan memiliki fungsional yang konsisten
- Meningkatkan kualitas code

### Rekomendasi Tools

1. Jest
   Test runner javascript yang memungkinkan untuk mengakses DOM melalui JSDom. Kelebihannya yaitu mudah digunakan, sintaks yang bersih, fitur mocking yang kuat. Kekurangannya yaitu memerlukan konfigurasi awal yang cukup kompleks.

2. React Testing Library
   Memungkinkan kita untuk mengetes komponen react tanpa bergantung pada detail implementasinya. Kelebihan ini memudahkan proses refactoring dan mendorong kita menerapkan best practices untuk aksesibilitas.

### Handle

Beberapa kategori testing yang dapat digunakan pada handle event: GetByText, LabelText, PlaceholderText, AltText, & DisplayValue.

Handle Asynchronous digunakan ketika hendak mengetes fetch pada sebuah API.

---

# Latihan

### Soal Prioritas 1

- Pada file CreateProduct.test.js buatlah test untuk memastikan bahwa form input Product Name dapat menerima input teks dan menampilkannya di halaman.

```
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
```

- Buatlah test untuk memastikan bahwa pilihan setiap form yang dipilih dapat disimpan dan ditampilkan dengan benar.

```
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
```

### Soal Prioritas 2

- validasi product name

```
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

```

- Buatlah test untuk memastikan validasi semua form field tersebut tidak boleh kosong.

```
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
```

### Soal Eksplorasi

Buatlah test untuk memastikan bahwa form dapat menampilkan pesan error jika terjadi kesalahan saat menyimpan data ke state

```
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
```
