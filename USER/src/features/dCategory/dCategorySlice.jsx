import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import doctorCategoryService from "./dCategoryService";
const initialState = {
  dCategories:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const allDoctorCategory = createAsyncThunk(
  "doctor/getcategory",
  async (thunkAPI) => {
    try {
      return await doctorCategoryService.getDoctorCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getADoctorCategory = createAsyncThunk(
  "doctor/getAcategory",
  async (id,thunkAPI) => {
    try {
      return await doctorCategoryService.getDoctorACategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);




export const resetState = createAction("Reset_all");

export const doctorCategorySlice = createSlice({
  name: "doctorCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(allDoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(allDoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.dCategories = action.payload?.data;
      }),
      builder.addCase(allDoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
   
    builder.addCase(getADoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getADoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.SingleData = action.payload.data;

      }),
      builder.addCase(getADoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      builder.addCase(resetState, () => initialState);

  },
});

export default doctorCategorySlice.reducer;
