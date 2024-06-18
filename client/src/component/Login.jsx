import React from "react";

const Login = () => {
  return (
    <div className="loginpage">
      <h3> Login </h3>

      <div className="leftForm">
   
        {/*will contain a input fields*/}
        <input type="email" placeholder="Enter the Email"></input>
        <input type="password" placeholder="Enter password"></input>
        <button> LOGIN</button>
      </div>

      <div className="rightForm"> {/*will contain a graphic image*/}</div>
    </div>
  );
};
export default Login;
