import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";
import clown1 from "../../Assets/clown21.png";
import clown2 from "../../Assets/pngwing.png";
import ell1 from "../../Assets/Ellipse1.png";
import ell2 from "../../Assets/Ellipse2.png";
import vec1 from "../../Assets/Vector1.png";
import laugh from "../../Assets/haha.png";
import arr from "../../Assets/Frame.png";
import arrshad from "../../Assets/FrameShad.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LocationSearchBar = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search action with location as the parameter
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="location-icon">
        <FaMapMarkerAlt className="location" />
      </div>
      <input
        type="text"
        className="searchbar"
        placeholder="Type in your location."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Link to="/search" id="search">
        <button className="searchbutton" type="submit">
          <img src={arrshad} alt="" className="arrshad" />
          <img src={arr} alt="" className="arr" />
        </button>
      </Link>
    </form>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homecontent">
        <h2>Welcome to</h2>
        <h1>RENT-O-MOCKERY</h1>
        <h4>Find and rent clowns close to your location in minutes</h4>
        <LocationSearchBar />
        <img src={clown1} alt="" className="clown1" />
      </div>
      <img src={clown2} alt="" className="clown2" />
      <img src={ell1} alt="" className="ell1" />
      <img src={ell2} alt="" className="ell2" />
      <img src={vec1} alt="" className="vec1" />
      <img src={laugh} alt="" className="laugh" />
    </div>
  );
};

export default Home;
