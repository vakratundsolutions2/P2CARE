import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import BlogCategoryService from "./BlogCategoryService";
const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const AddblogCategory = createAsyncThunk(
  "blogCat/create",
  async (catData, thunkAPI) => {
    try {
      return await BlogCategoryService.AddBlogCategory(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetAllBlogCategory = createAsyncThunk(
  "blogCat/getAll",
  async ( thunkAPI) => {
    //  console.log(catData);
    try {
      return await BlogCategoryService.ALLBlogCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const DeleteBlogCategory = createAsyncThunk(
  "blogCat/delete",
  async (catData, thunkAPI) => {
    //  console.log(catData);
    try {
      return await BlogCategoryService.delBlogCategory(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateBlogCategory = createAsyncThunk(
  "blogCat/update",
  async (catData, thunkAPI) => {
    //  console.log(catData);
    try {
      return await BlogCategoryService.updateBlogCategory(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddblogCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddblogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.bCategory = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Blog Category Created");
        }
      }),
      builder.addCase(AddblogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetAllBlogCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.BlogCategories = action.payload?.data;
        
      }),
      builder.addCase(GetAllBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(DeleteBlogCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(DeleteBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message
          if (state.isSuccess === true) {
            toast.success("Blog Category Deleted successfully");
          }
      }),
      builder.addCase(DeleteBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(UpdateBlogCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("Blog Category Updated Successfully");
        }
      }),
      builder.addCase(UpdateBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export default blogCategorySlice.reducer;
