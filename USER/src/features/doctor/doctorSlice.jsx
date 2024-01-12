import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import doctorService from "./doctorService";
const initialState = {
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


export const updateDoctor = createAsyncThunk(
  "doctor/update",
  async (drData, thunkAPI) => {
    try {
      return await doctorService.updateDoctor(drData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetAllAvailable = createAsyncThunk(
  "doctor/available",
  async (thunkAPI) => {
    try {
      return await doctorService.AllAvailable();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const BOOKNOW = createAsyncThunk("doctor/BOOK", async (DATA , thunkAPI) => {

  return DATA
  
});





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

        state.allDoctors = action.payload?.data;
      }),
      builder.addCase(getAllDoctors.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

   
    builder.addCase(updateDoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(updateDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.updatedDoctor = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctor Updated successfully");
        }
      }),
      builder.addCase(updateDoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetAllAvailable.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllAvailable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.Available = action.payload?.data;
        
      }),
      builder.addCase(GetAllAvailable.rejected, (state) => {
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
  },
});

export default doctorSlice.reducer;
