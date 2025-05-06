import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actAddProductToWishlist from "./act/actAddProductToWishlist";
import actRemoveProductFromWishlist from "./act/actRemoveProductFromWishlist";
import actGetLoggedUserWishlist from "./act/actGetLoggedUserWishlist";
import { IProduct } from "@interfaces/iproduct";

type TWishlistState = {
  productIds: string[],
  count: number,
  data: IProduct[],
  loading: TLoading,
  error: string | null
}

const initialState: TWishlistState = {
  productIds: JSON.parse(localStorage.getItem('productIds') || '[]'),
  count: 0,
  data: [],
  loading: 'idle',
  error: null
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add product to wishlist
    builder.addCase(actAddProductToWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actAddProductToWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productIds = action.payload.data;
    })
    builder.addCase(actAddProductToWishlist.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // remove product from wishlist
    builder.addCase(actRemoveProductFromWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actRemoveProductFromWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productIds = action.payload.data;
    })
    builder.addCase(actRemoveProductFromWishlist.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // get logged user wishlist
    builder.addCase(actGetLoggedUserWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actGetLoggedUserWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.count = action.payload.count;
      state.data = action.payload.data;
    })
    builder.addCase(actGetLoggedUserWishlist.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
  }
})

export default wishlistSlice.reducer;
