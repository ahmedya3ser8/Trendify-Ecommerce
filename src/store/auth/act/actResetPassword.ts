import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actResetPassword = createAsyncThunk('auth/actResetPassword', async (formData: {email: string, newPassword: string}, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.put(`/api/v1/auth/resetPassword`, formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actResetPassword;
