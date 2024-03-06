import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import doctorService from "./doctorService";
const initialState = {
  doctors: [],
  newdoctors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createDoctor = createAsyncThunk(
  "doctor/add",
  async (Data, thunkAPI) => {
    try {
      return await doctorService.createNewDoctor(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const SearchDoctors = createAsyncThunk(
  "doctor/search",
  async (Data, thunkAPI) => {
    try {
      return await doctorService.searchDoctors(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
export const GetAllRequest = createAsyncThunk(
  "doctor/getnewDoctors",
  async (thunkAPI) => {
    try {
      return await doctorService.newDoctors();
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
export const deleteADoctor = createAsyncThunk(
  "doctor/delete",
  async (id, thunkAPI) => {
    try {
      return await doctorService.deleteDoctor(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateDoctor = createAsyncThunk(
  "doctor/update",
  async (drData, thunkAPI) => {
    try {
      return await doctorService.updateDoctor(drData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddManyDoctors = createAsyncThunk(
  "doctor/add-many",
  async (drData, thunkAPI) => {
    try {
      return await doctorService.addDoctors(drData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(createDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.NewDoctor = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctors Added successfully");
        }
      }),
      builder.addCase(createDoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
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

    builder.addCase(deleteADoctor.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(deleteADoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        state.deletedDoctor = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Doctor deleted successfully");
        }
      }),
      builder.addCase(deleteADoctor.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(updateDoctor.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(updateDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.updatedDoctor = action.payload?.udata;
        if (state.isSuccess === true) {
          toast.success("Doctor Updated successfully");
        }
      }),
      builder.addCase(updateDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 600);
        }
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
    builder.addCase(SearchDoctors.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(SearchDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.doctors = action.payload?.data;
      }),
      builder.addCase(SearchDoctors.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetAllRequest.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(GetAllRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.newdoctors = action.payload?.data;
      }),
      builder.addCase(GetAllRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(AddManyDoctors.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    }),
      builder.addCase(AddManyDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        if (state.isSuccess === true) {
          toast.success(action.payload?.message);
        }
      }),
      builder.addCase(AddManyDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(
            action.payload?.response?.data?.message
              ? action.payload?.response?.data?.message
              : "Internal Server Error"
          );
        }
      });

    builder.addCase(resetState, () => initialState);
  },
});

export default doctorSlice.reducer;
