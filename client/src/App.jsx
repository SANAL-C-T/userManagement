import React from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";

import AdminHome from "./pages/AdminHomepage";
import AdminCanEdit from "./pages/AdminCanEdit";
const App = () => {
  return (
    //this page will have the routes to other pages

    <div>
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      {/* <Homepage/> */}
      {/* <AdminCanEdit /> */}
      <AdminHome />
    </div>
  );
};
export default App;
