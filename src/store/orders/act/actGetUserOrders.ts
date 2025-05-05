import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetUserOrders = createAsyncThunk('orders/actGetUserOrders', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  const userId = localStorage.getItem('userId') as string;
  try {
    const res = await axios.get(`/api/v1/orders/user/${userId}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetUserOrders;
