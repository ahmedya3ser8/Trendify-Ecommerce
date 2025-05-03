import { ICart } from "@interfaces/icart";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TResponse = {
  cartId: string | null,
  data: ICart,
  numOfCartItems: number,
  message: string | null,
}

const actGetLoggedUserCart = createAsyncThunk('cart/actGetLoggedUserCart', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`https://ecommerce.routemisr.com/api/v1/cart`);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message)
    } else {
      return rejectWithValue('an unexpected error')
    }
  }
})

export default actGetLoggedUserCart;
