import React from "react";
import ThemeContext from "../context/ThemeContext";

function BodyComp(props) {
  const context = React.useContext(ThemeContext);

  return (
    <div className={`${context.theme}-body`}>
      <div className="button-container">
        <button
          onClick={context.toggleTheme}
          className={`${context.theme}-button`}
        >
          Switch Theme
        </button>
        <p>You are currently using {`${context.theme}`} mode</p>
      </div>
    </div>
  );
}

export default BodyComp;
