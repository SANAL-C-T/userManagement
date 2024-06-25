import React from "react";
import { useSelector } from "react-redux";

import "../Css/usertile.css";

const UserTiles = () => {
  const { loading, users, error } = useSelector((state) => state.FromStoreAdmin);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users || users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div className="userTilesContainer">
      {users.map((user) => (
        <div className="userTile" key={user.Email}>
          <div className="userProfile">
            <img src={`http://localhost:5000${user.Profile}`} />
          </div>
          <div className="userName">{user.Name}</div>
          <div className="userPhone">{user.Phone}</div>
          <div className="userEmail">{user.Email}</div>
          <div className="editBtn">
            <button>EDIT</button>
          </div>
          <div className="deleteBtn">
            <button>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTiles;
