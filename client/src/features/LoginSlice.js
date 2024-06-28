import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Type } from "lucide-react";


const initialState = {
  loading: false,
  error: null,
  user: null,
  token: localStorage.getItem('token'),
  count: 0
};

// User login action creator
export const ToUserLoginPage = createAsyncThunk(
  "loggedUser/userLogin",
  async (userInput) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", userInput);
      console.log("response.data::", response.data)
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Upload edited data action creator
// export const uploadEditedData = createAsyncThunk(
//   "addprofileData/uploadData",
//   async (formData, { getState }) => {
//     try {
//       const state = getState();
//       const token = state.loggedUser.token; 
//       console.log("tok:::",token)
//       const response = await axios.post("http://localhost:5000/api/uploadEdits", formData, {
//         headers: {
//           Authorization: `Bearer ${token}` // jwt token to headers
//         }
//       });

//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }
// );

export const uploadEditedData = createAsyncThunk(
  "addprofileData/uploadData",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("Token not found");
      }
      console.log("Token:", token);

      const response = await axios.post("http://localhost:5000/api/uploadEdits", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error in uploadEditedData:", error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Upload edited data action creator is working code
// export const uploadEditedData = createAsyncThunk(
//   "addprofileData/uploadData",
//   async (formData) => {
//     try {
//       const backend = await axios.post("http://localhost:5000/api/uploadEdits", formData);
//       console.log(backend.data)
//       return backend.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }
// );


export const logout = () => ({
  type: "loggedUser/logout",
  payload: null,
});



export const addcounter = () => ({
  type: "loggedUser/addcounter",
  payload: 1
});


export const substractcounter = () => ({
  type: "loggedUser/subcounter",
  payload: 1
});

//"subcounter"   is to be passed to the reducer.  



// Reducer
const loginSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    addcounter: (state, action) => {
      state.count = state.count + action.payload;
    },

    subcounter: (state, action) => {
      state.count = state.count - action.payload;
    }
  },
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
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem('token', action.payload.token);
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
      })

  },
});

export default loginSlice.reducer;
