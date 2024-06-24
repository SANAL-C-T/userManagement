import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: null,
    user: null,
  };
  


//this is the action creator.
export const ToUserLoginPage = createAsyncThunk("loggedUser/userLogin",async (userInput) => {
    try {//sending login form data to backend.
      const response = await axios.post("http://localhost:5000/api/login", userInput ); //sending to backend.
      console.log("response from backend when login::",response.data)
      return response.data;//passing the response from backend to payload
      
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
        state.user = null;
        state.error = null;
      })
      .addCase(ToUserLoginPage.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;

        console.log("setting state user::",state.user)
      })
      .addCase(ToUserLoginPage.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message || "Login failed";
      });
  },
});

export default loginSlice.reducer;//sending to store.

//tis page has connection to
//1. store
//2. login component
//3. 