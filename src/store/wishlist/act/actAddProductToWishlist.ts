import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: string[],
  message: string
}

const actAddProductToWishlist = createAsyncThunk('wishlist/actAddProductToWishlist', async (productId: string, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<TResponse>(`/api/v1/wishlist`, {productId});
    localStorage.setItem('productIds', JSON.stringify(res.data.data))
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actAddProductToWishlist;
