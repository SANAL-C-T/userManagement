import React, { useState } from "react";
import "../Css/body.css";
// import { fetchUser } from "../features/HomepageSlice";

import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.FromStoreLogin);

  return (
    <div className="Homebody">
      <div className="left">
        <h2>Hello, {user.user.Name}</h2>
      </div>

      <div className="middle">
        <h3>GIVEN DETAILS</h3>
        <hr></hr>
        <br></br>
        <h4>Your Email id: {user.user.Email}</h4>
        <br></br>
        <h4>Your Phone Number is {user.user.Phone}</h4>
      </div>

      <div className="right">
        <img src="" alt="Progfile picture"></img>
      </div>
    </div>
  );
};
export default Body;
