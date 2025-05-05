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

const actCashOrder = createAsyncThunk('orders/actCashOrder', async (formData: TFormData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const res = await axios.post(`/api/v1/orders/${formData.cartId}`, {shippingAddress: formData.shippingAddress})
    return res.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actCashOrder;
