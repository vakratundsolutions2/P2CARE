import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Service from "./Service";
import toast from "react-hot-toast";

export const getAllServices = createAsyncThunk(
  "service/get-services",
  async (thunkAPI) => {
    try {
      return await Service.getAllService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAService = createAsyncThunk(
  "service/get-service",
  async (id,thunkAPI) => {
    try {
      return await Service.getAService(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createAService = createAsyncThunk(
  "service/create-service",
  async (serviceData, thunkAPI) => {
    
    try {
      return await Service.createService(serviceData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAService = createAsyncThunk(
  "service/delete-service",
  async (serviceData, thunkAPI) => {
    
    try {
      return await Service.deleteService(serviceData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAService = createAsyncThunk(
  "service/update-service",
  async (serviceData, thunkAPI) => {
    
    try {
      return await Service.updateService(serviceData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
   Services:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState = createAction("Reset_all");
export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;

        state.Services = action.payload.data;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createAService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.message = action.payload.message;
        if (state.isSuccess === true) {
          toast.success("Success");
        }
        state.NewService = action.payload?.data;
      })
      .addCase(createAService.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.message = action.payload.message;
        if (state.isSuccess === true) {
          toast.success("Deleted Successfully");
        }
        state.DelService = action.payload?.data;
      })
      .addCase(deleteAService.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // state.message = action.payload.message;
        if (state.isSuccess === true) {
          toast.success("Updated Successfully");
        }
        state.UpdatedService = action.payload?.data;
      })
      .addCase(updateAService.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.SingleData = action.payload?.data;
      })
      .addCase(getAService.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);

  },
});

export default serviceSlice.reducer;
