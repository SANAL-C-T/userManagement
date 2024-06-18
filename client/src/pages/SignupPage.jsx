import React from "react";
import SignUp from "../component/SignUp";
const SignupPage = () => {
  return (
    <div className="signuppage">
      <h3> Sign up</h3>
      <div className="signupleft">{/* this contain a graphic image*/}</div>

      <div className="signupright">
       
        {/* this contain the sign uo form*/}
        <input type="text" placeholder="Enter Name"></input>
        <input type="text" placeholder="Enter Email"></input>
        <input type="text" placeholder="Enter Phone"></input>
        <input type="password" placeholder="Enter Password"></input>

        <button>Sign up</button>
      </div>
    </div>
  );
};
export default SignupPage;
