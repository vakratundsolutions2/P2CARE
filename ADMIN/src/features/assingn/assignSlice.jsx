import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import assignService from "./assignService";

export const getAllAssign = createAsyncThunk(
  "assing/get-assign",
  async (thunkAPI) => {
    try {
      return await assignService.getAssign();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAssign = createAsyncThunk(
  "assing/get-Aassign",
  async (id,thunkAPI) => {
    try {
      return await assignService.getsingleAssign(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addNewAssign = createAsyncThunk(
  "assign/add-assign",
  async (DATA,thunkAPI) => {
    try {
      return await assignService.addAssign(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAssign = createAsyncThunk(
  "assign/delete-assign",
  async (DATA,thunkAPI) => {
    try {
      return await assignService.delAsign(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateAssign = createAsyncThunk(
  "assign/update-assign",
  async (DATA,thunkAPI) => {
    try {
      return await assignService.editAsign(DATA);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
   assign:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState = createAction("Reset_all");
export const assignSlice = createSlice({
  name: "assign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.assign = action?.payload?.data;
      })
      .addCase(getAllAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addNewAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success("Assign Success");
        }
      })
      .addCase(addNewAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      })
      .addCase(deleteAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.assign = action.payload.data;
      })
      .addCase(getAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(UpdateAssign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
         if (state.isSuccess === true) {
           toast.success(action.payload.message);
         }
        state.update = action.payload.data;
      })
      .addCase(UpdateAssign.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);

  },
});
export default assignSlice.reducer;
