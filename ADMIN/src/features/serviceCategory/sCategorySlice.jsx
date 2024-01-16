import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sCategoryService from "./sCategoryService";
import toast from "react-hot-toast";
const initialState = {
  sCategories:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const allServiceCategory = createAsyncThunk(
  "service/getcategory",
  async (thunkAPI) => {
    try {
      return await sCategoryService.getServiceCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAServiceCategory = createAsyncThunk(
  "service/getAcategory",
  async (id,thunkAPI) => {
    try {
      return await sCategoryService.getAServiceCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addServiceCategory = createAsyncThunk(
  "service/addCategory",
  async (catData, thunkAPI) => {
    try {
      return await sCategoryService.createServiceCategory(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");


export const deleteServiceCategory = createAsyncThunk(
  "service/delete/ServiceCategory",
  async (id, thunkAPI) => {
    try {
      return await sCategoryService.deleteCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateServiceCategory = createAsyncThunk(
  "service/update/ServiceCategory",
  async (id, thunkAPI) => {
    try {
      return await sCategoryService.updateCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const ServiceCategorySlice = createSlice({
  name: "serviceCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allServiceCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder
        .addCase(allServiceCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.message = action.payload.message;
          state.sCategories = action.payload?.data;
        })
        .addCase(allServiceCategory.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(addServiceCategory.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addServiceCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.message = action.payload.message;
          if (state.isSuccess === true) {
            toast.success(action.payload.message);
          }
          state.NewSCategory = action.payload?.data;
        })
        .addCase(addServiceCategory.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(deleteServiceCategory.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(deleteServiceCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.message = action.payload.message;
          if (state.isSuccess === true) {
            toast.success(action.payload.message);
          }
          state.DelSCategory = action.payload?.data;
        })
        .addCase(deleteServiceCategory.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(updateServiceCategory.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateServiceCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          if (state.isSuccess === true) {
            toast.success("Successfully updated");
          }
          state.updatedSCategory = action.payload?.data;
        })
        .addCase(updateServiceCategory.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(getAServiceCategory.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getAServiceCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          
          state.SingleData = action.payload?.data;
        })
        .addCase(getAServiceCategory.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
        })
        .addCase(resetState, () => initialState);

  },
});

export default ServiceCategorySlice.reducer;
