import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const actClearUserCart = createAsyncThunk('cart/actClearUserCart', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message)
    } else {
      return rejectWithValue('an unexpected error')
    }
  }
})

export default actClearUserCart;
