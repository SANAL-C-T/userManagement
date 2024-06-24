// store.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../features/SignUpSlice';
import loginReducer from "../features/LoginSlice";


const store = configureStore({
  reducer: {
    FromStoreSignUp: signupReducer,
    FromStoreLogin: loginReducer,
  },
});

export default store;
//this is the store which contian all the reducer function, these reducers update the respective state.

//this store is connected to main.jsx. through providers.