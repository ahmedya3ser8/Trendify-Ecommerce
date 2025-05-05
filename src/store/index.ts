import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice';
import categories from './categories/categoriesSlice';
import products from './products/productsSlice';
import cart from './cart/cartSlice';
import orders from './orders/ordersSlice';

export const store = configureStore({
  reducer: {
    auth,
    categories,
    products,
    cart,
    orders
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
