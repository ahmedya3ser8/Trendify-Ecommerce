import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actClearUserCart = createAsyncThunk('cart/actClearUserCart', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.delete(`/api/v1/cart`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actClearUserCart;
