import React from "react";
import "../Css/signup.css";
import signupImage from "../../public/signUpGraphics.svg";

const SignupPage = () => {
  return (
    <div >
      <h2 className="signup-title">Sign up</h2>

      <div className="signuppage">
      <div className="signupleft">
        <img src={signupImage} alt="Sign up Graphic" />
      </div>
      <div className="signupright">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Enter Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <div className="form-group">
            <button className="btn-signup" type="submit">Sign up</button>
          </div>
        </form>
      </div>


      </div>
    </div>
  );
};

export default SignupPage;
