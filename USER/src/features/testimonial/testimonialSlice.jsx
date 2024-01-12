import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import testimonialService from "./testimonialService";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const AddTestimonial = createAsyncThunk(
  "testimonial/add",
  async (Data, thunkAPI) => {
    try {
      return await testimonialService.addTest(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);





export const GetAllTestimonial = createAsyncThunk(
  "testimonial/getAll",
  async (thunkAPI) => {
    try {
      return await testimonialService.getAllTest();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const DeleteAtesTimonial = createAsyncThunk(
  "testimonial/delete",
  async (catData, thunkAPI) => {
    try {
      return await testimonialService.delTest(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const DeleteAllTestimonial = createAsyncThunk(
  "testimonial/delete-all",
  async (thunkAPI) => {
    //  console.log(catData);
    try {
      return await testimonialService.delAllTest();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateTestimonial = createAsyncThunk(
  "testimonial/update",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await testimonialService.updTest(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddTestimonial.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.newTestimonial = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Testimonial Created");
        }
      }),
      builder.addCase(AddTestimonial.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });




    builder.addCase(GetAllTestimonial.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.AllTestimonials = action.payload?.data;
      }),
      builder.addCase(GetAllTestimonial.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(DeleteAtesTimonial.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(DeleteAtesTimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("Deleted successfully");
        }
      }),
      builder.addCase(DeleteAtesTimonial.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(DeleteAllTestimonial.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(DeleteAllTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("All Testimonials Delete successfully");
        }
      }),
      builder.addCase(DeleteAllTestimonial.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(UpdateTestimonial.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("Testimonial Updated Successfully");
        }
      }),
      builder.addCase(UpdateTestimonial.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default testimonialSlice.reducer;
