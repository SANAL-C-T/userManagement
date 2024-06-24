import React from "react";
import "../Css/navbar.css";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
const Navigate=useNavigate()




  return (
    <div className="topNavbar">
      <div className="topleftnavbar">
        <div className="navItem" onClick={()=>{Navigate("/homepage")}}>HOME</div>
        <div className="navItem" onClick={()=>{Navigate("/editprofile")}}>EDIT</div>
        <button className="logoutButton" onClick={()=>{Navigate("/")}}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Navbar;
