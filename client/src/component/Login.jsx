import React from "react";
import "../Css/login.css";
import loginImage from "../../public/loginGraphics.svg";

const Login = () => {
  return (
    <div>
     
      <div className="loginpage">

        <form className="leftForm">

        <h2 className="login-title">Login</h2>
        <br></br>
          {/* User mail id input */}
          <div className="form-group">
            <label htmlFor="email">User mail id</label>
            <input type="email" id="email" placeholder="Enter the Email" />
          </div>

          {/* Password input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>

          {/* Login button */}
          <div className="form-group">
            <button className="btn1" type="submit">LOGIN</button>
          </div>
        </form>

        <div className="rightForm">
          <img src={loginImage} alt="Login Graphic" />
        </div>
      </div>
    </div>
  );
};

export default Login;
