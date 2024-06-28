import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
import AdminHome from "./pages/AdminHomepage";
import AdminCanEdit from "./pages/AdminCanEdit";
import EditprofilePage from "./pages/EditProfilepage";
import AdminCreateUser from './pages/AdminCreateNewUser'
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
        <Route path="/adminCreateUser" element={<AdminCreateUser />} />
      </Routes>
    </Router>
  );
};

export default App;








// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Homepage from "./pages/Homepage";
// import AdminHome from "./pages/AdminHomepage";
// import AdminCanEdit from "./pages/AdminCanEdit";
// import EditprofilePage from "./pages/EditProfilepage";
// import AdminCreateUser from './pages/AdminCreateNewUser';
// import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
        
//         <Route path="/homepage" element={
//           <ProtectedRoute>
//             <Homepage />
//           </ProtectedRoute>
//         } />

//         <Route path="/editprofile" element={
//           <ProtectedRoute>
//             <EditprofilePage />
//           </ProtectedRoute>
//         } />

//         <Route path="/adminHome" element={
//           <ProtectedRoute>
//             <AdminHome />
//           </ProtectedRoute>
//         } />

//         <Route path="/adminEdit" element={
//           <ProtectedRoute>
//             <AdminCanEdit />
//           </ProtectedRoute>
//         } />

//         <Route path="/adminCreateUser" element={
//           <ProtectedRoute>
//             <AdminCreateUser />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </Router>
//   );
// };

// export default App;