import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import availableService from './availablityService'
const initialState = {
  availablity: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const GetAlvailablity = createAsyncThunk(
  "available/get-one",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await availableService.getavailablity(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const ResetState = createAction("Reset_all");

export const availablitySlice = createSlice({
  name: "availablity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAlvailablity.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAlvailablity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.availablity =
          action.payload?.responseData?.bookingavailabilityInformation[0];
      }),
      builder.addCase(GetAlvailablity.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      
    builder.addCase(ResetState, () => initialState);
  },
});

export default availablitySlice.reducer;
