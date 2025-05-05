import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormData = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string
}

const actAuthRegister = createAsyncThunk('auth/actAuthRegister', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post(`/api/v1/auth/signup`, formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actAuthRegister;
