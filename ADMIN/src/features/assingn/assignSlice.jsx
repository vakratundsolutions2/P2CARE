import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import assignService from "./assignService";

export const getAllAssign = createAsyncThunk(
  "assing/get-assign",
  async (thunkAPI) => {
    try {
      return await assignService.getAssign();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addNewAssign = createAsyncThunk(
  "assign/add-assign",
  async (DATA,thunkAPI) => {
    try {
      return await assignService.addAssign(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  //  patient:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState = createAction("Reset_all");
export const assignSlice = createSlice({
  name: "assign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.AllAsignDoctor = action?.payload?.data;
      })
      .addCase(getAllAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addNewAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      })
      .addCase(addNewAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;

      });
  },
});
export default assignSlice.reducer;
