import React from "react";

function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <a href="#startBootstrap" className="bootstrapButton">
          Start Bootstrap
        </a>
        <ul className="nav-list">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SAMPLE POST</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
