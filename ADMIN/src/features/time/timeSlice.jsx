import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import timeService from './timeService' 
import toast from "react-hot-toast";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const alltime  = createAsyncThunk(
  "time/get ",
  async (thunkAPI) => {
    try {
      return await timeService.getAllTime();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addtime  = createAsyncThunk(
  "time/add ",
  async (Data, thunkAPI) => {
    try {
      return await timeService.AddNewTime(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");

export const deletetime  = createAsyncThunk(
  "time/delete/time ",
  async (id, thunkAPI) => {
    try {
      return await timeService.DeleteTime(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updatetime  = createAsyncThunk(
  "time/update/time ",
  async (id, thunkAPI) => {
    try {
      return await timeService.updateTime(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(alltime .pending, (state) => {
      state.isLoading = true;
    }),
      builder
        .addCase(alltime .fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.AllTimes = action.payload?.data;
        })
        .addCase(alltime .rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(addtime .pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addtime .fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          if (state.isSuccess === true) {
            toast.success(action.payload.message);
          }
          state.NewS  = action.payload?.data;
        })
        .addCase(addtime .rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(deletetime .pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deletetime .fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.message = action.payload.message;
          if (state.isSuccess === true) {
            toast.success(action.payload.message);
          }
          state.DeletedTime  = action.payload?.data;
        })
        .addCase(deletetime .rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(updatetime .pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updatetime .fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          if (state.isSuccess === true) {
            toast.success("Successfully updated");
          }
          state.updatedTime  = action.payload?.data;
        })
        .addCase(updatetime .rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        });
  },
});

export default timeSlice.reducer;
