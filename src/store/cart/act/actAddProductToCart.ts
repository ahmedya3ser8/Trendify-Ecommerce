import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = {
  numOfCartItems: number,
  message: string,
}

const actAddProductToCart = createAsyncThunk('cart/actAddProductToCart', async (productId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<TResponse>(`https://ecommerce.routemisr.com/api/v1/cart`, {productId});
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue('an unexpected error');
    }
  }
})

export default actAddProductToCart;
