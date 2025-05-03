import { ICart } from "@interfaces/icart";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = {
  data: ICart,
  numOfCartItems: number
}

const actRemoveCartItem = createAsyncThunk('cart/actRemoveCartItem', async (productId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.delete<TResponse>(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message)
    } else {
      return rejectWithValue('an unexpected error')
    }
  }
})

export default actRemoveCartItem;
