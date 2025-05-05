import { IProduct } from "@interfaces/iproduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: IProduct
}

const actGetSpecificProduct = createAsyncThunk('products/actGetSpecificProduct', async (productId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`/api/v1/products/${productId}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetSpecificProduct;
