import { ICart } from "@interfaces/icart";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: ICart,
  numOfCartItems: number
}

const actRemoveCartItem = createAsyncThunk('cart/actRemoveCartItem', async (productId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.delete<TResponse>(`/api/v1/cart/${productId}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actRemoveCartItem;
