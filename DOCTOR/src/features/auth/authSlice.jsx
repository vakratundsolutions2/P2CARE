/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import toast from "react-hot-toast";

// const getUserLocalStorage = localStorage.getItem("DOCTOR")
//   ? JSON.parse(localStorage.getItem("DOCTOR"))
//   : null;

const getUserLocalStorage = sessionStorage.getItem("DOCTOR")
  ? JSON.parse(sessionStorage.getItem("DOCTOR"))
  : null;
const initialState = {

    user: null ?? getUserLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const login = createAsyncThunk(
  "auth/user-login",
  async (user, thunkAPI) => {
    try {
      var data = await authService.login(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doctorProfileUpdate = createAsyncThunk(
  "auth/doctor-profile-update",
  async (user, thunkAPI) => {
    try {
      var data = await authService.profuleUpdateData(user);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const LoginOTP = createAsyncThunk(
  "auth/user-login/OTP",
  async (user, thunkAPI) => {
    try {
      var data = await authService.loginOTP(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editData = createAsyncThunk(
  "auth/edtiData",
  async (user, thunkAPI) => {
    try {
      var data = await authService.editData(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutData = createAsyncThunk(
    "auth/logoutData",
    async (user, thunkAPI) => {
        try {
            var data = await authService.logout();
            return data;
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
        state.user = action.payload.data;
        state.isError = false;
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });

      builder.addCase(doctorProfileUpdate.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      }),
        builder.addCase(doctorProfileUpdate.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload.data;
          state.isError = false;
        }),
        builder.addCase(doctorProfileUpdate.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.user = null;
          if (state.isError === true) {
            toast.error(action.payload.response.data.message);
          }
        });
    builder.addCase(LoginOTP.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(LoginOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Login successful");
        state.user = action.payload.unverifiedUser;
        state.isError = false;
      }),
      builder.addCase(LoginOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(editData.fulfilled, (state, action) => {
      toast.success("Update Successfull");
      state.user = action.payload;
    }),
      builder.addCase(editData.rejected, (state, action) => {
        state.isError = true;
        if (state.isError === true) {
          console.log(action);
          toast.error(action.payload.response.data.message);
        }
      }).addCase(logoutData.fulfilled, (state, action) => {
            toast.success("logout Successfull");
            state.user = null;
            state.isLoading = false;
            state.isSuccess = false;
        }),
      
    builder.addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
