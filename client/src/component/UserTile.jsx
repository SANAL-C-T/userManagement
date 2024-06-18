import React from "react";

import test from '../../public/testprofileimg.png'
import"../Css/usertile.css"


const userTile = () => {
  return (
    <div className="userTile">
      <div className="userPrfile"><img src={test}></img></div>
      <div className="userNamae">sanal</div>
      <div className="userNamae">1234567890</div>
      <div className="userNamae">sanal@gmail.com</div>
      <div className="editbtn"><button>EDIT</button></div>
      <div className="deltbtn"><button>DELETE</button></div>
    </div>
  );
};
export default userTile;
