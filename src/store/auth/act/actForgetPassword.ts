import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actForgetPassword = createAsyncThunk('auth/actForgetPassword', async (formData: {email: string}, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post(`/api/v1/auth/forgotPasswords`, formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actForgetPassword;
