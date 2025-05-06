import { IProduct } from "@interfaces/iproduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  count: number,
  data: IProduct[]
}

const actGetLoggedUserWishlist = createAsyncThunk('wishlist/actGetLoggedUserWishlist', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`/api/v1/wishlist`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetLoggedUserWishlist;
