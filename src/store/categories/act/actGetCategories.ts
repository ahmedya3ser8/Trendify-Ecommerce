import { ICategory } from "@interfaces/icategory";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TResponse = {
  data: ICategory[]
}

const actGetCategories = createAsyncThunk('categories/actCategories', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.get<TResponse>(`/api/v1/categories`);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetCategories;
