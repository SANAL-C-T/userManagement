import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    users: null,
    error: null,

}


export const getUser = createAsyncThunk(
    "adminhomepage/fetchingUsers",
    async ({ page, limit }) => {
      try {
        const response = await axios.get("http://localhost:5000/api/FetchUser", {
          params: { page, limit },
        });

        console.log("incoming data:::",response.data)
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data || "Failed to fetch users");
      }
    }
  );


const AdminSlice = createSlice({
    name:"adminhomepage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading=true;
                state.users=null;
                state.error=null;
            })
            .addCase(getUser.fulfilled, (state,action) => {
                state.loading=false;
                state.users=action.payload;
                state.error=null;
            })
            .addCase(getUser.rejected, (state,action) => {
                state.loading=false;
                state.users=null;
                state.error= action.error.message || "Failed to get users";
            })
    }
})

export default AdminSlice.reducer;