import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <Title />
      <div className="title-container">
        <h1 className="header-title">Clean Blog</h1>
        <span class="title-subheading">A Blog Theme by Start Bootstrap</span>
      </div>
    </div>
  );
}

export default Header;
