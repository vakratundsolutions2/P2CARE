import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import doctorCategoryService from "./dCategoryService";
const initialState = {
  dCategories:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createDoctorCategory = createAsyncThunk(
  "doctor/category",
  async (catData, thunkAPI) => {
    //  console.log(catData);
    try {
      return await doctorCategoryService.doctorCategory(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const allDoctorCategory = createAsyncThunk(
  "doctor/getcategory",
  async (thunkAPI) => {
    try {
      return await doctorCategoryService.getDoctorCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getADoctorCategory = createAsyncThunk(
  "doctor/getAcategory",
  async (id,thunkAPI) => {
    try {
      return await doctorCategoryService.getDoctorACategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteDoctorCategory = createAsyncThunk(
  "doctor/delete/DoctorCategory",
  async (id, thunkAPI) => {
    try {
      return await doctorCategoryService.deleteCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateDoctorCategory = createAsyncThunk(
  "doctor/update/DoctorCategory",
  async (catdata, thunkAPI) => {
    try {
      return await doctorCategoryService.updateCategory(catdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const resetState = createAction("Reset_all");

export const doctorCategorySlice = createSlice({
  name: "doctorCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(createDoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.dCategory = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctors Category Created");
        }
      }),
      builder.addCase(createDoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(allDoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(allDoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.dCategories = action.payload?.data;
      }),
      builder.addCase(allDoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(deleteDoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(deleteDoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.deletedData = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Successfully deleted");
        }
      }),
      builder.addCase(deleteDoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(updateDoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(updateDoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedData = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Successfully updated");
        }
      }),
      builder.addCase(updateDoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(getADoctorCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getADoctorCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.SingleData = action.payload.data;

      }),
      builder.addCase(getADoctorCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      builder.addCase(resetState, () => initialState);

  },
});

export default doctorCategorySlice.reducer;
