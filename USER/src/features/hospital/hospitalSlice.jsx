import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import hospitalService from "./hospitalService";
const initialState = {
  hospitals:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAllHospitals = createAsyncThunk(
  "hospital/get-all",
  async ( thunkAPI) => {
    try {
      return await hospitalService.allHospital();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAHospital = createAsyncThunk(
  "hospital/get",
  async (id, thunkAPI) => {
    try {
      return await hospitalService.getAHospital(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllHospitals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHospitals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.hospitals = action.payload?.data;
      })
      .addCase(getAllHospitals.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getAHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.SingleData = action.payload?.data;
        
      })
      .addCase(getAHospital.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      builder.addCase(resetState, () => initialState);

  },
});
export default hospitalSlice.reducer