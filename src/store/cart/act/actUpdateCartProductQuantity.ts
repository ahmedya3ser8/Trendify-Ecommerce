import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TData = {
  productId: string,
  count: number
}

const actUpdateCartProductQuantity = createAsyncThunk('cart/actUpdateCartProductQuantity', async (data: TData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.put(`/api/v1/cart/${data.productId}`, {count: data.count});
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actUpdateCartProductQuantity;
