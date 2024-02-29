import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import blogService from "./blogService";
const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const AddBlogs = createAsyncThunk(
  "blog/create",
  async (Data, thunkAPI) => {
    try {
      return await blogService.addblog(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetAllBlogs = createAsyncThunk("blog/getAll", async (thunkAPI) => {
  try {
    return await blogService.allblogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const DeleteABlog = createAsyncThunk(
  "blog/delete",
  async (catData, thunkAPI) => {
    //  console.log(catData);
    try {
      return await blogService.delBlog(catData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const DeleteAllBlog = createAsyncThunk(
  "blog/delete-all",
  async (thunkAPI) => {
    //  console.log(catData);
    try {
      return await blogService.delAllBlog();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateBlog = createAsyncThunk(
  "blog/update",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await blogService.updBlog(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetABlog = createAsyncThunk(
  "blog/getABlog",
  async (Data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await blogService.getAblog(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddBlogs.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.newBlog = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success("Blog Created");
        }
      }),
      builder.addCase(AddBlogs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetAllBlogs.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.blogs = action.payload?.data;
      }),
      builder.addCase(GetAllBlogs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(DeleteABlog.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(DeleteABlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("Blog Deleted successfully");
        }
      }),
      builder.addCase(DeleteABlog.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(DeleteAllBlog.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(DeleteAllBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        if (state.isSuccess === true) {
          toast.success("All Blogs Delete successfully");
        }
      }),
      builder.addCase(DeleteAllBlog.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(UpdateBlog.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        state.editedBlog = action.payload?.udata;
        if (state.isSuccess === true) {
          toast.success("Blog Updated Successfully");
        }
      }),
      builder.addCase(UpdateBlog.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(GetABlog.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetABlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload?.message;
        state.SingleBlog = action.payload?.data;
      }),
      builder.addCase(GetABlog.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(resetState, () => initialState);
  },
});

export default blogSlice.reducer;
