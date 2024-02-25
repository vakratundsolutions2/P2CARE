import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const resetState = createAction("Reset_all");
const initialState = {
  imageData: "",
};

export const imageDetail = createAsyncThunk(
  "image/setimage",
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

    builder.addCase(resetState, () => initialState);
  },
});

// export const { imageDetail } = imageSlice.actions;

export default imageSlice.reducer;
