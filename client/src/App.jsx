import React from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";
const App = () => {
  return (
    //this page will have the routes to other pages

    <div>
      <SignupPage />
      <LoginPage />
      <Homepage/>
    </div>
  );
};
export default App;
