import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actVerifyResetCode = createAsyncThunk('auth/actVerifyResetCode', async (formData: {resetCode: string}, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post(`/api/v1/auth/verifyResetCode`, formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actVerifyResetCode;
