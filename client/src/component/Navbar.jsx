import React from "react";
import "../Css/navbar.css";

const Navbar = () => {
  return (
    <div className="topNavbar">
      <div className="topleftnavbar">
        <div className="navItem">HOME</div>
        <div className="navItem">EDIT</div>
        <button className="logoutButton">LOGOUT</button>
      </div>
    </div>
  );
};

export default Navbar;
