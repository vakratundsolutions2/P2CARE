import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import toast from "react-hot-toast";
const getUserLocalStorage = localStorage.getItem("USER")
  ? JSON.parse(localStorage.getItem("USER"))
  : null;
const initialState = {
  user: getUserLocalStorage,
  appoinments: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/user-login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const LoginOTP = createAsyncThunk(
  "auth/user-login/OTP",
  async (user, thunkAPI) => {
    try {
      return await authService.login3(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  "auth/user-register",
  async (user, thunkAPI) => {
    try {
      return await authService.reg(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk("auth/user-logout", async (thunkAPI) => {
  try {
    return await authService.out();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const GetAUser = createAsyncThunk(
  "auth/user-get",
  async (data, thunkAPI) => {
    try {
      return await authService.getAuser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateUser = createAsyncThunk(
  "auth/user-update",
  async (data, thunkAPI) => {
    localStorage.removeItem("USER");

    try {
      return await authService.updateUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetAppoinmentsUser = createAsyncThunk(
  "auth/get-appoinments",
  async (data, thunkAPI) => {
    try {
      return await authService.getAppoinmentsUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetPassword = createAsyncThunk(
  "auth/user-reset-password",
  async (data, thunkAPI) => {
    try {
      return await authService.resetPassword(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "auth/user-forgot-password",
  async (data, thunkAPI) => {
    try {
      return await authService.forgotPassword(data);
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
        if (state.isSuccess === true) {
          toast.success("Login successful");
        }
        state.user = action.payload;
        state.isError = false;
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success(action?.payload?.message);
        }
        state.registerUser = action.payload?.data;
        state.isError = false;
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      }),
      builder.addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
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
        state.isError = false;
        state.user = action.payload?.unverifiedUser;
      }),
      builder.addCase(LoginOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      });
    builder.addCase(GetAUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(GetAUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload?.data;
      }),
      builder.addCase(GetAUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
      });
    builder.addCase(UpdateUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(UpdateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload?.udata;

        if (state.isSuccess === true) {
          toast.success(action?.payload?.message);
        }
      }),
      builder.addCase(UpdateUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
      });
    builder.addCase(GetAppoinmentsUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(GetAppoinmentsUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.appoinments = action.payload?.data;
      }),
      builder.addCase(GetAppoinmentsUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.appoinments = null;
      });
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.restToken = action.payload?.token;
        if (state.isSuccess === true) {
          toast.success(action?.payload?.message);
        }
      }),
      builder.addCase(forgotPassword.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
        
      });
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        if (state.isSuccess === true) {
          toast.success(action?.payload?.message);
        }
        state.resetPasss =action.payload?.user;
      }),
      builder.addCase(resetPassword.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      });
    builder.addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
