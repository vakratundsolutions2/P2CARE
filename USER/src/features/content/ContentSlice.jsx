import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import ContentService from "./ContentService";
const initialState = {
  contact: [],
  FAQList: [],
  about: [],
  home: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const GetContact = createAsyncThunk(
  "content/get-contact",

  async ( thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.getcontact();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// =====================================FAQ===============

export const GetAllFAQ = createAsyncThunk(
  "content/getall-faq",
  async (thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.getAllFaq();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


// ============================= ABOUT===============================

export const GetAllAbout = createAsyncThunk(
  "content/getall-about",
  async (thunkAPI) => {
    try {
      return await ContentService.getabout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// ============================= HOME===============================

export const GetAllHome = createAsyncThunk(
  "content/getall-home",
  async (thunkAPI) => {
    try {
      return await ContentService.gethome();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const ResetState = createAction("Reset_all");

export const ContentSlice = createSlice({
  name: "Content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetContact.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.contact = action.payload?.data;
      }),
      builder.addCase(GetContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
      // =================================FAQ=============================
          builder.addCase(GetAllFAQ.pending, (state) => {
            state.isLoading = true;
          }),
            builder.addCase(GetAllFAQ.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.isError = false;
              state.FAQList = action.payload.data;
            }),
            builder.addCase(GetAllFAQ.rejected, (state) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
            });


            // ================== ABOUT====================
          builder.addCase(GetAllAbout.pending, (state) => {
            state.isLoading = true;
          }),
            builder.addCase(GetAllAbout.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.isError = false;
              state.about = action.payload.data;
            }),
            builder.addCase(GetAllAbout.rejected, (state) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
            });
            // ================== HOME====================
          builder.addCase(GetAllHome.pending, (state) => {
            state.isLoading = true;
          }),
            builder.addCase(GetAllHome.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.isError = false;
              state.home = action.payload.data;
            }),
            builder.addCase(GetAllHome.rejected, (state) => {
              state.isLoading = false;
              state.isError = true;
              state.isSuccess = false;
            });

    builder.addCase(ResetState, () => initialState);
  },
});

export default ContentSlice.reducer;
