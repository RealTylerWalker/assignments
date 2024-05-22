import React from "react";
import "./meme.css";

function Meme() {
  return (
    <div>
      <div className="meme-container">
        <div className="input-container">
          <div className="top-text-container">
            <label for="top-text" className="top-text-label">
              Top text
            </label>
            <input
              type="text"
              id="top-text"
              name="top-text"
              className="top-text-input"
              placeholder="Shut up"
            />
          </div>
          <div className="bottom-text-container">
            <label for="bottom-text" className="bottom-text-label">
              Bottom text
            </label>
            <input
              type="text"
              id="bottom-text"
              name="bottom-text"
              className="bottom-text-input"
              placeholder="And take my money"
            />
          </div>
        </div>

        <button className="button">Get a new meme image 🖼</button>
      </div>
    </div>
  );
}

export default Meme;
