import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import patientService from "./patientsService";
import toast from "react-hot-toast";




export const getPatients = createAsyncThunk("patient/get-patient", async (thunkAPI) => {
  try {
    return await patientService.getPatient();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createAPatient = createAsyncThunk(
  "patient/create-patient",
  async (patientData, thunkAPI) => {
    try {
      return await patientService.createPatient(patientData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const updateAPatient = createAsyncThunk(
  "patient/update-patient",
  async (patientData, thunkAPI) => {
    console.log(patientData);
    try {
      return await patientService.updatePatient(patientData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAPatient = createAsyncThunk(
  "patient/delete-patient",
  async (id, thunkAPI) => {
    try {
      return await patientService.deletePatient(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  );
  
const initialState = {
//  patient:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const resetState = createAction("Reset_all");
export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.Patients = action.payload.data;
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(deleteAPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(deleteAPatient.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(createAPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.newPatient = action.payload?.data;
        if(state.isSuccess === true){

          toast.success('Patient Added successfully')
        }
      })
      .addCase(createAPatient.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.updatedPatient = action.payload?.data;
      })
      .addCase(updateAPatient.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      });
     
  },
});

export default patientSlice.reducer;
