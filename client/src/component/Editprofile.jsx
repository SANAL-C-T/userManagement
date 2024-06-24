import React from "react";
import { useSelector } from "react-redux";
import "../Css/editprofile.css";
const Editprofile = () => {
  const { user } = useSelector((state) => state.FromStoreLogin);
  return (
    <div className="container">
      <h3 className="title">Edit Profile</h3>

      <form>
        <label htmlFor="editname">Name</label>
        <div>
          <input
            type="text"
            className="editname"
            id="editname"
            placeholder={user.user.Name}
          ></input>
        </div>
        <label htmlFor="editphone">Phone number</label>
        <div>
          <input
            type="text"
            className="editphone"
            id="editphone"
            placeholder={user.user.Phone}
          ></input>
        </div>
        <label htmlFor="addprofilepic">Add profile image</label>
        <div className=" imgsection">
          <div className="leftInput">
            <input
              type="file"
              className="addprofilepic"
              id="addprofilepic"
            ></input>
          </div>

          <div className="rightInput"></div>
        </div>

        <div>
          <button className="savebutton">SAVE</button>
        </div>
      </form>
    </div>
  );
};
export default Editprofile;
