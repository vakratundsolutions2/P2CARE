import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import BlogCategoryService from "./BlogCategoryService";
const initialState = {
  BlogCategories :[],
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
  async (thunkAPI) => {
    //  console.log(catData);
    try {
      return await BlogCategoryService.ALLBlogCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const SingleBlogCategory = createAsyncThunk(
  "blogCat/getABlogCategory",
  async (id ,thunkAPI) => {
    //  console.log(catData);
    try {
      return await BlogCategoryService.ABlogCategory(id);
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
    builder
      .addCase(AddblogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddblogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.bCategory = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Blog Category Created");
        }
      })
      .addCase(AddblogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(GetAllBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.BlogCategories = action.payload?.data;
      })
      .addCase(GetAllBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(DeleteBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("Blog Category Deleted successfully");
        }
      })
      .addCase(DeleteBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(UpdateBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("Blog Category Updated Successfully");
        }
      })
      .addCase(UpdateBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(SingleBlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SingleBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        state.SingleData = action.payload?.data;
        
      })
      .addCase(SingleBlogCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })

      .addCase(resetState, () => initialState);
  },
});

export default blogCategorySlice.reducer;
