import { ICart } from "@interfaces/icart";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  cartId: string | null,
  data: ICart,
  numOfCartItems: number,
  message: string | null,
}

const actGetLoggedUserCart = createAsyncThunk('cart/actGetLoggedUserCart', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`/api/v1/cart`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetLoggedUserCart;
