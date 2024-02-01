import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import ReportService from "./reportService";



const initialState = {
  BOOKINGS: [],
  inquaries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export  const GetAllBookings = createAsyncThunk(
  "report/all_bookings",
  async (serviceData, thunkAPI) => {
    
    try {
      return await ReportService.getAllBookings(serviceData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export  const GetAppinmentById = createAsyncThunk(
  "report/appinment",
  async (id, thunkAPI) => {
    
    try {
      return await ReportService.getBookingByID(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export  const DeleteBookings = createAsyncThunk(
  "report/appinment/delete",
  async (id, thunkAPI) => {
    try {
      return await ReportService.DeleteBookings(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export  const GetAllInquary = createAsyncThunk(
  "report/inquary/getAll",
  async (id, thunkAPI) => {
    try {
      return await ReportService.AllInq();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export  const GetInquary = createAsyncThunk(
  "report/inquary/get",
  async (id, thunkAPI) => {
    try {
      return await ReportService.getInq(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export  const DeleteInquary = createAsyncThunk(
  "report/inquary/delete",
  async (id, thunkAPI) => {
    try {
      return await ReportService.deleteInq(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export  const EditInq = createAsyncThunk("report/inquary/edit", async (id, thunkAPI) => {
  
  try {
    return await ReportService.editInq(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const ResetState = createAction("Reset_all");
export const ReportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;

        state.BOOKINGS = action.payload.data;
      })
      .addCase(GetAllBookings.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(GetAppinmentById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAppinmentById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;

        state.SingleData = action.payload.data;
      })
      .addCase(GetAppinmentById.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(DeleteBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
        state.deleteData = action.payload.data;
      })
      .addCase(DeleteBookings.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(GetAllInquary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllInquary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.inquaries = action.payload.data;
      })
      .addCase(GetAllInquary.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(GetInquary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetInquary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.SingleInquary = action.payload.data;
      })
      .addCase(GetInquary.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(EditInq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditInq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      })
      .addCase(EditInq.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(DeleteInquary.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteInquary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      })
      .addCase(DeleteInquary.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(ResetState, () => initialState);
  },
});

export default ReportSlice.reducer;
