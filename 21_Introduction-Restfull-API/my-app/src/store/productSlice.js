/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: "",
  reducers: {
    addProduct: (state, { payload }) => {
      const { id, productName, productCategory, productImage, productFreshness, productDesc, productPrice } =
        payload;
      const newData = {
        id,
        productName,
        productCategory,
        productImage,
        productFreshness,
        productDesc,
        productPrice,
      };
      state.push(newData);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    editProduct: (state, { payload }) => {
      const { id, productName, productCategory, productImage, productFreshness, productDesc, productPrice } =
        payload;
      state.map((product) => {
        if (product.id === id) {
          product.productName = productName;
          product.productCategory = productCategory;
          product.productImage = productImage;
          product.productFreshness = productFreshness;
          product.productDesc = productDesc;
          product.productPrice = productPrice;
        }
      });
    },
  },
});

export const selectProduct = (state) => state.products;
export const { addProduct, removeProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
