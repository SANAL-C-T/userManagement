import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate=useNavigate()
  return (
    <div className="topNavbar">
    <div className="topleftnavbar">
      <div className="navItem" onClick={()=>{navigate("/adminHome")}}>HOME</div>
      <div className="navItem" onClick={()=>{navigate("/adminCreateUser")}}>CREATE A USER</div>
      <button className="logoutButton" onClick={()=>{navigate("/")}}>LOGOUT</button>
    </div>
  </div>
  )
}

export default AdminNavbar;


 



