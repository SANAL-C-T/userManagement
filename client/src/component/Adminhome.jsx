import React, { useEffect } from "react";
import Searchbar from "../component/Searchbar";
import UserTiles from "../component/UserTile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/AdminSlice";
import "../Css/adminHome.css";

const Adminhomebody = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ page: 1, limit: 10 }));
  }, [dispatch]);

  
  return (
    <div className="Adminhomebody">
      <Searchbar />
      <UserTiles />
    </div>
  );
};

export default Adminhomebody;
