import { IProduct } from "@interfaces/iproduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = {
  data: IProduct[]
}

const actGetProductsByCategoryId = createAsyncThunk('products/actGetProductsByCategoryId', async (categoryId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`https://ecommerce.routemisr.com/api/v1/products`, {
      params: {
        "category[in]": categoryId
      }
    });
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message)
    } else {
      return rejectWithValue('an unexpected error')
    }
  }
})

export default actGetProductsByCategoryId;
