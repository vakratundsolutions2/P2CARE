import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const resetImageState = createAction("Reset_all");
const initialState = {
  imageData: [],
  imageData2: { dataUrl2: "", ImageName2: "" },
};

export const imageDetail = createAsyncThunk(
  "image/setimage",
  async (DATA, thunkAPI) => {
    return DATA;
  }
);
export const imageDetail2 = createAsyncThunk(
  "image/setimage2",
  async (DATA, thunkAPI) => {
    return DATA;
  }
);
export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(imageDetail.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(imageDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.imageData = action.payload;
        
      }),
      builder.addCase(imageDetail.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(imageDetail2.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(imageDetail2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.imageData2 = action.payload;
      }),
      builder.addCase(imageDetail2.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(resetImageState, () => initialState);
  },
});

// export const { imageDetail } = imageSlice.actions;

export default imageSlice.reducer;
