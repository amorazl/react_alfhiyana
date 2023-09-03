// Get the form element
const form = document.getElementById("myForm");

// Get the input elements
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productImage = document.getElementById("productImage");
const productFreshness = document.getElementsByName("productFreshness");
const productDesc = document.getElementById("productDesc");
const submitButton = document.getElementById("submitButton");

// get the additional id
const productNameCount = document.getElementById("productNameCount");
const tableBody = document.getElementById("tableBody");

productName.addEventListener("input", function () {
  // Get the current input value
  const productNameValue = productName.value;

  // calculate the char remaining must not exceed 25
  const charactersRemaining = 25 - productNameValue.length;
  productNameCount.textContent = `Characters remaining: ${charactersRemaining}`;
  if (productNameValue.length === 10) {
    alert("Last Name must not exceed 25 characters.");
  }
  if (productNameValue.length > 25) {
    productName.value = productNameValue.slice(0, 25);
  }

  // no symbols in input
  const containsSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(
    productNameValue
  );
  if (containsSymbol) {
    errorText1.textContent = "Name must not contain symbols.";
  } else {
    errorText1.textContent = "";
  }
});

// form cannot be empty
form.addEventListener("submit", function (event) {
  // product name
  if (productName.value.trim() === "") {
    errorText1.textContent = "Please enter a valid product name.";
    event.preventDefault();
  } else {
    errorText1.textContent = "";
  }

  // product category
  productCategory.addEventListener("input", function () {
    errorText2.textContent = "";
  });
  if (productCategory.value.trim() === "") {
    errorText2.textContent = "Please choose a valid product category.";
    event.preventDefault();
  }

  // product image
  productImage.addEventListener("input", function () {
    errorText3.textContent = "";
  });
  if (productImage.value.trim() === "") {
    errorText3.textContent = "Please upload a product image.";
    event.preventDefault();
  }

  // product freshness
  let isRadioSelected = false;
  for (let i = 0; i < productFreshness.length; i++) {
    if (productFreshness[i].checked) {
      isRadioSelected = true;
      break;
    }
  }
  if (!isRadioSelected) {
    alert("Please select a product freshness.");
    event.preventDefault();
  }

  // product desc
  productDesc.addEventListener("input", function () {
    errorText5.textContent = "";
  });
  if (productDesc.value.trim() === "") {
    errorText5.textContent = "Please enter a valid product description.";
    event.preventDefault();
  }

  // product price
  productPrice.addEventListener("input", function () {
    errorText6.textContent = "";
  });
  if (productPrice.value.trim() === "") {
    errorText6.textContent = "Please enter a valid product price.";
    event.preventDefault();
  }

  // add data form to the table
  event.preventDefault();

  const name = productName.value;
  const category = productCategory.value;
  const image = productImage.value;
  const desc = productDesc.value;
  const price = productPrice.value;
  const freshnessValue = document.querySelector(
    'input[name="productFreshness"]:checked'
  );
  const freshness = freshnessValue.value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${name}</td>
  <td>${category}</td>
  <td>${image}</td>
  <td>${freshness}</td>
  <td>${desc}</td>
  <td>${price}</td>
  `;

  tableBody.appendChild(newRow);

  productName.value = "";
  productCategory.value = "";
  productImage.value = "";
  freshnessValue.checked = false;
  productDesc.value = "";
  productPrice.value = "";
});

// delete all rows in a table
const deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", function () {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
});

// delete the last row
const deleteLastRow = document.getElementById("deleteLastRow");
deleteLastRow.addEventListener("click", function () {
  const lastRow = tableBody.lastElementChild;
  if (lastRow) {
    tableBody.removeChild(lastRow);
  }
});

// search a product by productName
const searchProduct = document.getElementById("searchProduct");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  const searchTerm = searchProduct.value.toLowerCase().trim();
  for (const row of tableBody.rows) {
    const productName = row.cells[0].textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
