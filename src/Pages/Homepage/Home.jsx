import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";
import clown1 from "../../Assets/clown21.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homecontent">
        <h2>Welcome to</h2>
        <h1>RENT-O-MOCKERY</h1>
        <h4>Find and rent clowns close to your location in minutes</h4>
        <img src={clown1} alt="" className="clown1" />
      </div>
    </div>
  );
};

export default Home;
