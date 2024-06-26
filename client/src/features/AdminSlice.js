import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: null,
  error: null,
  userToEdit: null,
};

export const getUser = createAsyncThunk(
  "adminhomepage/fetchingUsers",
  async ({ page, limit }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/FetchUser", {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "Failed to fetch users");
    }
  }
);

export const uploadEditedAdminData = createAsyncThunk(
  "adminhomepage/uploadEditedData",
  async (formData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/uploadAdminEdits", formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "Failed to upload data");
    }
  }
);

export const deleteUserByAdmin = createAsyncThunk(
  "adminhomepage/deleteUserbyAdmin",
  async ({ email }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/deleteUserByAdmin", { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "Failed to delete user");
    }
  }
);

export const getUserToEdit = (userToEdit) => ({
  type: 'adminhomepage/getUserToEdit',
  payload: userToEdit,
});

const AdminSlice = createSlice({
  name: "adminhomepage",
  initialState,
  reducers: {
    getUserToEdit: (state, action) => {
      state.userToEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.users = null;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.users = null;
        state.error = action.error.message || "Failed to get users";
      })
      .addCase(uploadEditedAdminData.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadEditedAdminData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map(user =>
          user.Email === action.payload.email ? action.payload : user
        );
        state.error = null;
      })
      .addCase(uploadEditedAdminData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to upload data";
      })
      .addCase(deleteUserByAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserByAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user.Email !== action.meta.arg.email);
        state.error = null;
      })
      .addCase(deleteUserByAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete user";
      });
  },
});

export default AdminSlice.reducer;
