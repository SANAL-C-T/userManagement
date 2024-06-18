import React from "react";

//loading components
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Body from "../component/Body";




const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};
export default Homepage;
