import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import availablityService from "./availablityService";

export const getAllAvailablity = createAsyncThunk(
  "available/get-all-availablity",
  async (thunkAPI) => {
    try {
      return await availablityService.getAvail();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAAvailablity = createAsyncThunk(
  "available/get-availablity",
  async (id,thunkAPI) => {
    try {
      return await availablityService.getAavail(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addNewavailablity = createAsyncThunk(
  "available/add-availablity",
  async (DATA, thunkAPI) => {
    try {
      console.log(DATA);
      return await availablityService.addAvail(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAvailablity = createAsyncThunk(
  "available/delete-availablity",
  async (DATA, thunkAPI) => {
    try {
      return await availablityService.delAvail(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAvailablity = createAsyncThunk(
  "available/update-availablity",
  async (DATA, thunkAPI) => {
    try {
      console.log('data',DATA);
      return await availablityService.editAvail(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
   availablities:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetStateAvailablity = createAction("Reset_all");
export const availablitySlice = createSlice({
  name: "availablity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAvailablity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAvailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.availablities = action?.payload?.data;
      })
      .addCase(getAllAvailablity.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addNewavailablity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewavailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      })
      .addCase(addNewavailablity.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAvailablity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAvailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      })
      .addCase(deleteAvailablity.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAAvailablity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAAvailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.DoctorAvailablity = action.payload?.data;
        state.DoctorData = action.payload?.doctor;
      })
      .addCase(getAAvailablity.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAvailablity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAvailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updateAvailablity = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Successfully updated");
        }
      })
      .addCase(updateAvailablity.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetStateAvailablity, () => initialState);
  },
});
export default availablitySlice.reducer;
