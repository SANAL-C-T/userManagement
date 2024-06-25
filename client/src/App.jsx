import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import AdminHome from "./pages/AdminHomepage";
import AdminCanEdit from "./pages/AdminCanEdit";
import EditprofilePage from "./pages/EditProfilepage";
import './App.css'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/editprofile" element={<EditprofilePage />} />

      
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/adminEdit" element={<AdminCanEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
