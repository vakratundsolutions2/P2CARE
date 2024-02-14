import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import ContentService from "./ContentService";
const initialState = {
  contact: [],
  about: [],
  home: [],
  FAQList: [],
  updateFAQ: null,
  addFAQ: null,
  addAbout: null,
  updateAbout: null,

  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const GetContact = createAsyncThunk(
  "content/get-contact",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.getcontact(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateContact = createAsyncThunk(
  "content/update-contact",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.updatecontact(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//  ======================================= FARQ   ====================
export const UpdateFAQ = createAsyncThunk(
  "content/update-faq",
  async (data, thunkAPI) => {
    try {
      return await ContentService.updateFaq(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddFAQ = createAsyncThunk(
  "content/add-faq",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.addFaq(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const GetFAQ = createAsyncThunk(
  "content/getOne-faq",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.getFaq(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
export const DeleteFAQ = createAsyncThunk(
  "content/delete-faq",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.deleteFaq(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);




// ===================================================ABOUT====================




export const GetAbout = createAsyncThunk(
  "content/get-about",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.getAbout(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddAbout = createAsyncThunk(
  "content/add-about",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.addAbout(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateAbout = createAsyncThunk(
  "content/update-about",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.updateAbout(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// ===================================================Home====================




export const GetHome = createAsyncThunk(
  "content/get-home",
  async (data, thunkAPI) => {
    try {
      return await ContentService.getHome(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddHome = createAsyncThunk(
  "content/add-home",
  async (data, thunkAPI) => {
    //  console.log(catData);
    try {
      return await ContentService.addHome(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const UpdateHome = createAsyncThunk(
  "content/update-home",
  async (data, thunkAPI) => {
    try {
      return await ContentService.updateHome(data);
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
    builder.addCase(UpdateContact.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.contact = action.payload?.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(UpdateContact.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    // ================================FAQ=============================

    builder.addCase(UpdateFAQ.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateFAQ.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updateFAQ = action.payload.data;

        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(UpdateFAQ.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(AddFAQ.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddFAQ.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addFAQ = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(AddFAQ.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

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

    builder.addCase(GetFAQ.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetFAQ.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.FAQ = action.payload.data;
      }),
      builder.addCase(GetFAQ.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(DeleteFAQ.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(DeleteFAQ.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.DelFAQ = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(DeleteFAQ.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
    builder.addCase(AddAbout.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddAbout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addAbout = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(AddAbout.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(UpdateAbout.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateAbout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updateAbout = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(UpdateAbout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(GetAbout.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetAbout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.about = action.payload.data;
        
      }),
      builder.addCase(GetAbout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        
      });
    builder.addCase(AddHome.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(AddHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addHome = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(AddHome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(UpdateHome.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updateHome = action.payload.data;
        if (state.isSuccess === true) {
          toast.success(action.payload.message);
        }
      }),
      builder.addCase(UpdateHome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
    builder.addCase(GetHome.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetHome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.home = action.payload.data;
      }),
      builder.addCase(GetHome.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });

    builder.addCase(ResetState, () => initialState);
  },
});

export default ContentSlice.reducer;
