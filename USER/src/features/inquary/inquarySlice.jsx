import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import inquaryService from "./inquaryService";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const AddInquiry = createAsyncThunk(
  "inquary/AddInquiry",
  async (DATA, thunkAPI) => {
    try {
      return await inquaryService.AddInquary(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const InquarySlice = createSlice({
  name: "inquary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddInquiry.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddInquiry.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;

        toast.success("Inquiry Collect Successfully.");
      }),
      builder.addCase(AddInquiry.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error("Inquiry Not Collected.");
      });
    builder.addCase(resetState, () => initialState);
  },
});

export default InquarySlice.reducer;
