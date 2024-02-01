import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import availableService from "./availablityService";
const initialState = {
  availablities: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const GetAllAavailablity = createAsyncThunk("available/getAll", async (thunkAPI) => {
  try {
    return await availableService.allavailablity();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const GetAavailablity = createAsyncThunk(
  "available/getOne",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await availableService.getavailablity(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const resetState = createAction("Reset_all");

export const availablitySlice = createSlice({
  name: "availablity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(GetAllAavailablity.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllAavailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.availablities = action.payload?.data;
      }),
      builder.addCase(GetAllAavailablity.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetAavailablity.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAavailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.AvailableByID = action.payload?.data;

      }),
      builder.addCase(GetAavailablity.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      
    builder.addCase(resetState, () => initialState);
  },
});

export default availablitySlice.reducer;
