import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

type TToken = {
  id: string
  name: string
  role: string
  iat: number
  exp: number
}

const actAuthLogin = createAsyncThunk('auth/actAuthLogin', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<TResponse>(`/api/v1/auth/signin`, formData);
    const token: TToken = jwtDecode(res.data.token!);
    localStorage.setItem('userId', token.id);
    localStorage.setItem('userName', token.name);
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actAuthLogin;
