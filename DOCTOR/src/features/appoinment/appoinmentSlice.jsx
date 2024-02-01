import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appoinmentService from "./appoinmentService";
import toast from "react-hot-toast";
const initialState = {
  appoinments: [],
  appoinment: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const GetAllAppoinments = createAsyncThunk(
  "appoinment/all",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await appoinmentService.getAppoinment(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetAppoinment = createAsyncThunk(
  "appoinment/get-one",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await appoinmentService.getAppoinmentBYID(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateAppoinment = createAsyncThunk(
  "appoinment/update",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await appoinmentService.UpdateAppoinment(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AcceptAppoinment = createAsyncThunk(
  "appoinment/accept",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await appoinmentService.AcceptAppoinment(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AcceptedListAppoinment = createAsyncThunk(
  "appoinment/accepted",
  async (Data, thunkAPI) => {
     console.log(Data);
    try {
      return await appoinmentService.AcceptAllAppoinment(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ResetState = createAction("Reset_all");

export const AppoinmentSlice = createSlice({
  name: "appoinment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllAppoinments.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllAppoinments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.appoinments = action.payload?.data;
      }),
      builder.addCase(GetAllAppoinments.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetAppoinment.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAppoinment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.appoinment = action.payload?.data;
      }),
      builder.addCase(GetAppoinment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(UpdateAppoinment.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateAppoinment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Updateappoinment = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success(action.payload?.message);
        }
      }),
      builder.addCase(UpdateAppoinment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(AcceptAppoinment.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AcceptAppoinment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.AcceptAppoinment = action.payload?.data;
        if(state.isSuccess === true) {
          toast.success(action.payload?.message);
        }
      }),
      builder.addCase(AcceptAppoinment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(AcceptedListAppoinment.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AcceptedListAppoinment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.accepted = action.payload?.data;
        
      }),
      builder.addCase(AcceptedListAppoinment.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(ResetState, () => initialState);
  },
});

export default AppoinmentSlice.reducer;
