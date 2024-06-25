import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

// User login action creator
export const ToUserLoginPage = createAsyncThunk(
  "loggedUser/userLogin",
  async (userInput) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", userInput);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Upload edited data action creator
export const uploadEditedData = createAsyncThunk(
  "addprofileData/uploadData",
  async (formData) => {
    try {
      const backend = await axios.post("http://localhost:5000/api/uploadEdits", formData);
      console.log(backend.data)
      return backend.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);


// Reducer
const loginSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ToUserLoginPage.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(ToUserLoginPage.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(ToUserLoginPage.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message || "Login failed";
      })
      .addCase(uploadEditedData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadEditedData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(uploadEditedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to upload data";
      });
  },
});

export default loginSlice.reducer;
