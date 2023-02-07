import React, { useState } from "react";
import "./Main.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import butt from "../../Assets/Frame.png";
import buttshad from "../../Assets/FrameShad.png";
import Tacha from "../../Assets/Tacha.png";
import Reno from "../../Assets/Reno.png";
import Osinwin from "../../Assets/Osinwin.png";
import Alpha from "../../Assets/Alpha.png";

const MainSearchBar = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search action with location as the parameter
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="mainschbar"
        placeholder="Type in your location."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <FaMapMarkerAlt className="locicon" />
      <button className="mschbutton" type="submit">
        <img src={buttshad} alt="" className="btnshadow" />
        <img src={butt} alt="" className="btn" />
      </button>
    </form>
  );
};

const Main = () => {
  const clownpicks = [
    {
      id: 1,
      topdesc: "Top rated",
      name: "TACHA CLOWN",
      image: Tacha,
      description: "24 parties hosted",
      price: "$40/hr",
      rating: "4.5/5",
    },
    {
      id: 2,
      topdesc: "Top rated",
      name: "RENO MOCKING",
      image: Reno,
      description: "24 parties hosted",
      price: "$40/hr",
      rating: "4.5/5",
    },
    {
      id: 3,
      topdesc: "Top rated",
      name: "OSINWIN ZEEH",
      image: Osinwin,
      description: "24 parties hosted",
      price: "$40/hr",
      rating: "4.5/5",
    },
    {
      id: 4,
      topdesc: "Top rated",
      name: "ALPHA SHOLA",
      image: Alpha,
      description: "24 parties hosted",
      price: "$40/hr",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="main">
      <div className="main-nav">
        <div className="name">R'O'M</div>
        <MainSearchBar />
        <div className="back"> back </div>
      </div>

      <div className="container">
        {clownpicks &&
          clownpicks.map((top) => (
            <div className="clowncontainer" key={top.id}>
              <span className="top-trate">
                <p>{top.topdesc}</p>
              </span>
              <img src={top.image} className="top-image" alt="" />
              <div className="tflex">
                <div className="tflex-left">
                  <h2 className="top-head">{top.name}</h2>
                  <h4 className="t-desc">{top.description}</h4>
                </div>
                <div className="tflex-right">
                  <h3 className="price">{top.price}</h3>
                  <h5 className="ratings">{top.ratings}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
