import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span>R'O'M</span>
        <span>About</span>
      </div>
      <div className="nav-right">
        <span>Login</span>
        <button>
          <span>SIGN UP</span>
        </button>
        <span />
      </div>
    </div>
  );
};

export default Navbar;
