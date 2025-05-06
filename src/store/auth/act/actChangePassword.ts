import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormData = {
  currentPassword: string,
  password: string,
  rePassword: string
}

type TResponse = {
  message: string | null,
  token: string | null,
  user: {
    email: string,
    name: string,
    role: string
  } | null
}

const actChangePassword = createAsyncThunk('auth/actChangePassword', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.put<TResponse>(`/api/v1/users/changeMyPassword`, formData);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actChangePassword;
