import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

type TFormData = {
  email: string;
  password: string;
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

const actAuthLogin = createAsyncThunk('auth/actAuthLogin', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<TResponse>(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formData);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message)
    } else {
      return rejectWithValue('an unexpected error')
    }
  }
})

export default actAuthLogin;
