import { useState, useEffect } from "react";
import "./App.css";
import randomColor from "randomcolor";

function App() {
  const [color1, setColor1] = useState(randomColor());
  const [color2, setColor2] = useState(randomColor());
  const [gradientCssInfo, setGradientCssInfo] = useState("");

  useEffect(() => {
    const gradientCss = `background: linear-gradient(to right, ${color1}, ${color2})`;
    setGradientCssInfo(gradientCss);
  }, [color1, color2]);

  return (
    <div className="body">
      <h1>CSS Gradient Code Generator</h1>
      <div className="generatorContainer">
        <div className="leftBox">
          <div
            className="gradientDisplay"
            style={{
              background: `linear-gradient(to right, ${color1}, ${color2})`,
            }}
          ></div>
          <div className="gradientCssInfo">
            <p className="cssText">{gradientCssInfo}</p>
          </div>
        </div>
        <div className="rightBox">
          <h2>Options</h2>
          <div className="color1Container">
            <p>Color 1</p>
            <p>{color1}</p>
            <input
              type="color"
              value={color1}
              className="color1Input"
              onChange={(e) => setColor1(e.target.value)}
            />
          </div>
          <div className="color2Container">
            <p>Color 2</p>
            <p>{color2}</p>
            <input
              type="color"
              value={color2}
              className="color1Input"
              onChange={(e) => setColor2(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
