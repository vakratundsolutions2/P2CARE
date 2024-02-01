import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import hospitalService from "./hospitalService";
const initialState = {
  hospitals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const AddHospital = createAsyncThunk(
  "hospital/add",
  async (hospital, thunkAPI) => {
    try {
      return await hospitalService.addHospital(hospital);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllHospitals = createAsyncThunk(
  "hospital/get-all",
  async (thunkAPI) => {
    try {
      return await hospitalService.allHospital();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAHospital = createAsyncThunk(
  "hospital/get",
  async (id, thunkAPI) => {
    try {
      return await hospitalService.getAHospital(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAHospital = createAsyncThunk(
  "hospital/delete",
  async (id, thunkAPI) => {
    try {
      return await hospitalService.deleteHospital(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAHospital = createAsyncThunk(
  "hospital/update",
  async (DATA, thunkAPI) => {
    try {
      return await hospitalService.uppdateHospital(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const SearchHospital = createAsyncThunk(
  "hospital/getByName",
  async (DATA, thunkAPI) => {
    try {
      return await hospitalService.getAHospitalByname(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AssignDoctors = createAsyncThunk(
  "hospital/assign",
  async (DATA, thunkAPI) => {
    try {
      return await hospitalService.assignDoctor(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const RemoveAssign = createAsyncThunk(
  "hospital/assign/remove",
  async (DATA, thunkAPI) => {
    try {
      return await hospitalService.deleteAssign(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.dCategory = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("New Hospital added successfully");
        }
      })
      .addCase(AddHospital.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      })
      .addCase(getAllHospitals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHospitals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.hospitals = action.payload?.data;
      })
      .addCase(getAllHospitals.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(deleteAHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.DeletedHospital = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Successfully deleted");
        }
      })
      .addCase(deleteAHospital.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      })
      .addCase(updateAHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.UpdatedHospital = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Successfully Updated");
        }
      })
      .addCase(updateAHospital.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      })
      .addCase(getAHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.SingleData = action.payload?.data;
      })
      .addCase(getAHospital.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(SearchHospital.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SearchHospital.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.hospitals = action.payload?.data;
      })
      .addCase(SearchHospital.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })

      .addCase(AssignDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AssignDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.assign = action.payload;
        if (state.isSuccess) {
          toast.success(action.payload.message);
        }
      })
      .addCase(AssignDoctors.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if(state.isError ===true){
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(RemoveAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RemoveAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.assign = action.payload;
        if (state.isSuccess) {
          toast.success(action.payload.message);
        }
      })
      .addCase(RemoveAssign.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message);
        }
      })

      .addCase(resetState, () => initialState);
  },
});
export default hospitalSlice.reducer;
