import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import toast from "react-hot-toast";
const getUserLocalStorage = localStorage.getItem("ADMIN")
  ? JSON.parse(localStorage.getItem("ADMIN"))
  : null;
const initialState = {
  admin: getUserLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/admin-login",
  async (admin, thunkAPI) => {
    try {
      return await authService.login(admin);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Login successful");
        state.admin = action.payload;
        state.isError = false;
      }),
      builder.addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.admin = null;
        toast.error("Invalid Access Request");
      });
    builder.addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
