import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
