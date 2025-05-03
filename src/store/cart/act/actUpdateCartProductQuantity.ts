import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TData = {
  productId: string,
  count: number
}

const actUpdateCartProductQuantity = createAsyncThunk('cart/actUpdateCartProductQuantity', async (data: TData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${data.productId}`, {count: data.count});
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message)
    } else {
      return rejectWithValue('an unexpected error')
    }
  }
})

export default actUpdateCartProductQuantity;
