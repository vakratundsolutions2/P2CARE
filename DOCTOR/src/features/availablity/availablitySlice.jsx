import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import availableService from "./availablityService";
import toast from "react-hot-toast";
const initialState = {
  availablity: [],
  slots: [],
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
export const GetAllSlots = createAsyncThunk(
  "time/get-slots",
  async (Data, thunkAPI) => {
    try {
      return await availableService.allTime();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetAAvailablity = createAsyncThunk(
  "available/get-availablity",
  async (id, thunkAPI) => {
    try {
      return await availableService.getAavail(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddNewavailablity = createAsyncThunk(
  "available/add-availablity",
  async (DATA, thunkAPI) => {
    try {
      return await availableService.addAvail(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const UpdateAvailablity = createAsyncThunk(
  "available/update-availablity",
  async (DATA, thunkAPI) => {
    try {
      console.log("data", DATA);
      return await availableService.editAvail(DATA);
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

    builder.addCase(GetAllSlots.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllSlots.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.slots = action.payload?.data;
      }),
      builder
        .addCase(GetAllSlots.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(GetAAvailablity.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(GetAAvailablity.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.DoctorAvailablity = action.payload?.data;
        })
        .addCase(GetAAvailablity.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.message = action.error;
        })
        .addCase(UpdateAvailablity.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(UpdateAvailablity.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.updateAvailablity = action.payload?.data;
          if (state.isSuccess === true) {
            toast.success(action.payload?.message);
          }
        })
        .addCase(UpdateAvailablity.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.message = action.error;
        });

    builder.addCase(ResetState, () => initialState);
  },
});

export default availablitySlice.reducer;
