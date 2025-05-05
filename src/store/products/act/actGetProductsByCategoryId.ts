import { IProduct } from "@interfaces/iproduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: IProduct[],
  results: number
}

const actGetProductsByCategoryId = createAsyncThunk('products/actGetProductsByCategoryId', async (categoryId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`/api/v1/products`, {
      params: {
        "category[in]": categoryId
      }
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetProductsByCategoryId;
