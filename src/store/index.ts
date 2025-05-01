import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice';
import categories from './categories/categoriesSlice';
import products from './products/productsSlice';

export const store = configureStore({
  reducer: {
    auth,
    categories,
    products
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
