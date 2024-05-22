import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img
          src="./images/troll-face.png"
          alt="troll-face"
          className="header-image"
        />
        <h2>MemeGenerator</h2>
      </div>
      <div>
        <h4 className="header-title">React Course - Project 3</h4>
      </div>
    </div>
  );
}

export default Header;
