import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    user: null,
  };
  


//this is the action creator.
export const ToUserLoginPage = createAsyncThunk("loggedUser/userLogin",async (userInput) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", userInput ); //sending to backend.
      return response.data;//reply from backend.
      
    } catch (error) {
      throw error.response.data;
    }
  }
);



//reducer perform according to the response from backend.
const loginSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ToUserLoginPage.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(ToUserLoginPage.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(ToUserLoginPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      });
  },
});

export default loginSlice.reducer;//sending to store.

//tis page has connection to
//1. store
//2. login component
//3. 