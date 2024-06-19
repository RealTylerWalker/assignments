import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function BodyComp(props) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className={`${theme}-body`}>
      <div className="button-container">
        <button onClick={toggleTheme} className={`${theme}-button`}>
          Switch Theme
        </button>
        <p>You are currently using {`${theme}`} mode</p>
      </div>
    </div>
  );
}

export default BodyComp;
