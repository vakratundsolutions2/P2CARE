import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import doctorService from "./doctorService";
import toast from "react-hot-toast";
const initialState = {
  doctors: [],
  doctorsFilter: [],
  BookingDetails: [],
  DoctorsDetails: [],
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
export const getADoctor = createAsyncThunk(
  "doctor/getADoctor",
  async (id, thunkAPI) => {
    try {
      return await doctorService.getADoctor(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const FilterDoctor = createAsyncThunk(
  "doctor/search/filter",
  async (DATA, thunkAPI) => {
    console.log('data', DATA);
    try {
      return await doctorService.filterDoctor(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const reviewDoctor = createAsyncThunk(
  "doctor/rating",
  async (DATA, thunkAPI) => {
    try {
      return await doctorService.ratingDoctor(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const BOOKNOW = createAsyncThunk(
  "doctor/BOOK",
  async (DATA, thunkAPI) => {
    return DATA;
  }
);
export const BookingDetails = createAsyncThunk(
  "doctor/BookingDetails",
  async (DATA, thunkAPI) => {
    try {
      return await doctorService.BookingDetails(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    booking: (state, action) => {
      state.booking = action.payload;
    }, bookingDetails: (state, action) => {
      localStorage.setItem("bookingDetails", JSON.stringify(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllDoctors.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAllDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.doctors = action.payload?.data;
      }),
      builder.addCase(getAllDoctors.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(getADoctor.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(getADoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.SingleData = action.payload?.data;
      }),
      builder.addCase(getADoctor.rejected, (state) => {
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
    builder.addCase(reviewDoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(reviewDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.review = action.payload;
        if (state.isSuccess === true) {
          toast.success("ThankYou for your review");
        }
      }),
      builder.addCase(reviewDoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(FilterDoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(FilterDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.doctors = action.payload?.data?.data;
        state.doctorsFilter = action.payload?.data;

      }),
      builder.addCase(FilterDoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(BookingDetails.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(BookingDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.BookingDetails = action.payload?.data;
        state.DoctorsDetails = action.payload?.doctorDetails;
        localStorage.removeItem("bookingDetails");
      }),
      builder.addCase(BookingDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(resetState, () => initialState);
  },
});

export const { bookingDetails } = doctorSlice.actions;

export default doctorSlice.reducer;
