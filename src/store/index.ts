import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/authSlice';
import cart from './cart/cartSlice';
import orders from './orders/ordersSlice';
import wishlist from './wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    auth,
    cart,
    orders,
    wishlist
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
