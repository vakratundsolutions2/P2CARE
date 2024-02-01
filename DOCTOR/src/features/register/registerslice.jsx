import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import registerService from "./registerService";
import toast from "react-hot-toast";

const initialState = {
    user: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const register = createAsyncThunk(
  "doctor/register",
  async (user, thunkAPI) => {
    try {
      var data = await registerService.registerData(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      }),
        builder.addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true; 
          state.user = action.payload.data;
          state.isError = false;
        }),
        builder.addCase(register.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.user = null;
          if (state.isError === true) {
            toast.error(action.payload.response.data.message);
          }
        });
        
      builder.addCase(resetState, () => initialState);
    },
  });
  
  export default registerSlice.reducer;
  

