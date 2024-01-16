import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import doctorService from "./doctorService";
const initialState = {
  doctors : [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const getAllDoctors = createAsyncThunk(
  "doctor/getAllDoctors",
  async (thunkAPI) => {
    try {
      return await doctorService.getDoctors();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getADoctor = createAsyncThunk(
  "doctor/getADoctor",
  async (id,thunkAPI) => {
    try {
      return await doctorService.getADoctor(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const BOOKNOW = createAsyncThunk(
  "doctor/BOOK",
  async (DATA, thunkAPI) => {
    return DATA;
  }
);

export const resetState = createAction("Reset_all");

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getAllDoctors.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAllDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.doctors = action.payload?.data;
      }),
      builder.addCase(getAllDoctors.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(getADoctor.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(getADoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.SingleData = action.payload?.data
        
      }),
      builder.addCase(getADoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      
        builder.addCase(BOOKNOW.pending, (state) => {
          state.isLoading = true;
        }),
          builder.addCase(BOOKNOW.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;

            state.BOOKSTATE = action.payload;
          }),
          builder.addCase(BOOKNOW.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
          });
      builder.addCase(resetState, () => initialState);

  },
});

export default doctorSlice.reducer;
