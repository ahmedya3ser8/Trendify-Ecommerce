import { IProduct } from "@interfaces/iproduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: IProduct[],
  results: number
}

const actGetProducts = createAsyncThunk('products/actGetProducts', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`/api/v1/products`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetProducts;
