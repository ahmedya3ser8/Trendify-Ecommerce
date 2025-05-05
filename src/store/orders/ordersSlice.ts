import { createSlice } from "@reduxjs/toolkit";
import actCheckoutOnline from "./act/actCheckoutOnline";
import { TLoading } from "@customTypes/shared";
import actCashOrder from "./act/actCashOrder";
import actGetUserOrders from "./act/actGetUserOrders";
import { IOrder } from "@interfaces/iorder";

type TOrdersState = {
  session: {
    cancel_url: string,
    success_url: string,
    url: string
  } | null,
  orders: IOrder[],
  loading: TLoading,
  error: string | null
}

const initialState: TOrdersState = {
  session: null,
  orders: [],
  loading: 'idle',
  error: null
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // checkout online
    builder.addCase(actCheckoutOnline.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actCheckoutOnline.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.session = action.payload.session;
    })
    builder.addCase(actCheckoutOnline.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // cash order
    builder.addCase(actCashOrder.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actCashOrder.fulfilled, (state) => {
      state.loading = 'succeeded';
    })
    builder.addCase(actCashOrder.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // get user orders
    builder.addCase(actGetUserOrders.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actGetUserOrders.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.orders = action.payload;
    })
    builder.addCase(actGetUserOrders.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
  }
})

export default ordersSlice.reducer;
