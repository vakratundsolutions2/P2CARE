import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import toast from "react-hot-toast";
const getUserLocalStorage = localStorage.getItem("ADMIN")
  ? JSON.parse(localStorage.getItem("ADMIN"))
  : null;
const initialState = {
  admin: getUserLocalStorage,
  users :[],
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
export const register = createAsyncThunk(
  "auth/admin-register",
  async (admin, thunkAPI) => {
    try {
      return await authService.reg(admin);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const Allusers = createAsyncThunk(
  "auth/getallusers",
  async ( thunkAPI) => {
    try {
      return await authService.allusers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const DeleteUSER = createAsyncThunk(
  "auth/delete/user",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteusers(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetUSERBYID = createAsyncThunk(
  "auth/get/user",
  async (id, thunkAPI) => {
    try {
      return await authService.getusers(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const EditUser = createAsyncThunk(
  "auth/edit/user",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      return await authService.edituser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const SearchUser = createAsyncThunk(
  "auth/Search/user",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      return await authService.searchuser(id);
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
        state.admin = action.payload.data;
        state.isError = false;
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.admin = null;
        state.message = action.payload;
        
        toast.error(action.payload?.response?.data?.message);

      });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        toast.success("Signup successful");
        
        state.isError = false;
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.admin = null;
        state.message = action.payload;

        toast.error(action.payload?.response?.data?.message);
      });
    builder.addCase(Allusers.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(Allusers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload.data
        state.isError = false;
      }),
      builder.addCase(Allusers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.users = [];
        state.message = action.payload;

      });
    builder.addCase(DeleteUSER.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(DeleteUSER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        if(state.isSuccess===true){
          toast.success(action.payload.message)
        }
      }),
      builder.addCase(DeleteUSER.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.users = [];
        state.message = action.payload;
        if(state.isError===true){
          toast.error(action.payload.response.data.message)
        }
      });
    builder.addCase(GetUSERBYID.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(GetUSERBYID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.SingleData =  action.payload.data
      }),
      builder.addCase(GetUSERBYID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.users = [];
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(EditUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(EditUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.EditData = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(EditUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.users = [];
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(SearchUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(SearchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload.data;
        
      }),
      builder.addCase(SearchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.users = [];
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(resetState, () => initialState);
  },
});

export default authSlice.reducer;
