import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from '@customTypes/shared';
import actAddProductToCart from "./act/actAddProductToCart";
import actGetLoggedUserCart from "./act/actGetLoggedUserCart";
import { ICart } from "@interfaces/icart";
import actRemoveCartItem from "./act/actRemoveCartItem";
import actUpdateCartProductQuantity from "./act/actUpdateCartProductQuantity";
import actClearUserCart from "./act/actClearUserCart";

type TCartState = {
  cartId: string | null,
  data: ICart | null,
  numOfCartItems: number,
  message: string | null,
  loading: TLoading,
  error: string | null
}

const initialState: TCartState = {
  cartId: null,
  data: null,
  numOfCartItems: 0,
  message: null,
  loading: 'idle',
  error: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add product to cart
    builder.addCase(actAddProductToCart.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actAddProductToCart.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.message = action.payload.message;
      state.numOfCartItems = action.payload.numOfCartItems;
    })
    builder.addCase(actAddProductToCart.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // get looged user cart
    builder.addCase(actGetLoggedUserCart.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actGetLoggedUserCart.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.message = action.payload.message;
      state.numOfCartItems = action.payload.numOfCartItems;
      state.cartId = action.payload.cartId;
      state.data = action.payload.data;
    })
    builder.addCase(actGetLoggedUserCart.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // remove cart item
    builder.addCase(actRemoveCartItem.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actRemoveCartItem.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.data = action.payload.data;
      state.numOfCartItems = action.payload.numOfCartItems;
    })
    builder.addCase(actRemoveCartItem.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // update cart product quantity
    builder.addCase(actUpdateCartProductQuantity.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actUpdateCartProductQuantity.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.data = action.payload.data;
      state.numOfCartItems = action.payload.numOfCartItems;
    })
    builder.addCase(actUpdateCartProductQuantity.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // clear user cart
    builder.addCase(actClearUserCart.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    })
    builder.addCase(actClearUserCart.fulfilled, (state) => {
      state.loading = 'succeeded';
      state.data = null;
      state.numOfCartItems = 0;
    })
    builder.addCase(actClearUserCart.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
  }
})

export default cartSlice.reducer;
