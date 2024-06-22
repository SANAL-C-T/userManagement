import React, { useState, useEffect } from "react";
import "../Css/body.css";
import { fetchUser } from "../features/HomepageSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [user, setuser] = useState({}); //local state

  useEffect(() => {
    dispatch(fetchUser(id))
      .unwrap()
      .then((result) => {
        console.log("Fetch Successful:", result);
        setuser(result);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
      });
  }, [dispatch, id]);

  console.log("user::", user);

  return (
    <div className="Homebody">
      <div className="left">
        <h2>Hello, {user.Name}</h2>
      </div>

      <div className="middle">
      <h3>GIVEN DETAILS</h3>
      <br></br>
      <br></br>
        <h4>Your Email id: {user.Email}</h4>
        <br></br>
        <h4>Your Phone Number is {user.Phone}</h4>
      </div>

      <div className="right">
        <h2>profilePic</h2>
      </div>
    </div>
  );
};
export default Body;
