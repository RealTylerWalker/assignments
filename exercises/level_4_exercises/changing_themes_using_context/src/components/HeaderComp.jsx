import React from "react";
import ThemeContext from "../context/ThemeContext";

function HeaderComp(props) {
  const context = React.useContext(ThemeContext);
  console.log(context);
  return (
    <div className={`${context.theme}-theme-header`}>
      <div className="title">
        <h1>TOGGLE THEME APP</h1>
      </div>
      <nav className="navBar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderComp;
