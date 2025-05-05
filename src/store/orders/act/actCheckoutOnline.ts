import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TFormData = {
  cartId: string,
  shippingAddress: {
    details: string,
    phone: string,
    city: string
  }
}

type TResponse = {
  session: {
    cancel_url: string,
    success_url: string,
    url: string
  }
}

const actCheckoutOnline = createAsyncThunk('orders/actCheckoutOnline', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post<TResponse>(`/api/v1/orders/checkout-session/${formData.cartId}?url=http://localhost:5173`, {shippingAddress: formData.shippingAddress})
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actCheckoutOnline;
