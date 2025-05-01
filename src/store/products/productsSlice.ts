import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import { IProduct } from "@interfaces/iproduct";
import actGetProductsByCategoryId from "./act/actGetProductsByCategoryId";

type TProductsState = {
  data: IProduct[],
  loading: TLoading,
  error: string | null
}

const initialState: TProductsState = {
  data: [],
  loading: 'idle',
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get All products
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.data = action.payload.data;
    })
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // get products By CategoryId
    builder.addCase(actGetProductsByCategoryId.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actGetProductsByCategoryId.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.data = action.payload.data;
    })
    builder.addCase(actGetProductsByCategoryId.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
  }
})

export default productsSlice.reducer;
