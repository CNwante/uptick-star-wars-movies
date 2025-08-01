import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string, password: string }>) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
