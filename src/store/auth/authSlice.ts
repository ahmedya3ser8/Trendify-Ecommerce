import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actForgetPassword from "./act/actForgetPassword";
import actVerifyResetCode from "./act/actVerifyResetCode";
import actResetPassword from "./act/actResetPassword";
import actChangePassword from "./act/actChangePassword";

interface IAuthState {
  message: string | null,
  token: string | null,
  user: {
    email: string,
    name: string,
    role: string
  } | null,
  loading: TLoading,
  error: string | null
}

const initialState: IAuthState = {
  message: null,
  token: localStorage.getItem('accessToken') || null,
  user: null,
  loading: 'idle',
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('productIds');
      localStorage.removeItem('userName');
      state.token = null;
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // forget password
    builder.addCase(actForgetPassword.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actForgetPassword.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actForgetPassword.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // verify code
    builder.addCase(actVerifyResetCode.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actVerifyResetCode.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actVerifyResetCode.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // reset password
    builder.addCase(actResetPassword.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actResetPassword.fulfilled, (state) => {
      state.loading = "succeeded";
    })
    builder.addCase(actResetPassword.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
    // change password
    builder.addCase(actChangePassword.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actChangePassword.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    builder.addCase(actChangePassword.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    })
  }
})

export const {logout} = authSlice.actions; 
export default authSlice.reducer;
