import React from "react";
import Searchbar from "../component/Searchbar";
import UserTiles from "../component/UserTile";
import"../Css/adminHome.css"




const Adminhomebody = () => {
  return (
    <div className="Adminhomebody">
      <Searchbar />
      <UserTiles/>
      <UserTiles/>
      <UserTiles/>

      <UserTiles/>
      <UserTiles/>
      <UserTiles/>
    </div>
  );
};

export default Adminhomebody;
