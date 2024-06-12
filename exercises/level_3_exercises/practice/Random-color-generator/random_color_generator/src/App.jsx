import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [randomColor, setRandomColor] = useState("#FFD700");

  useEffect(() => {
    axios
      .get("https://random-color.onrender.com/colors/random")
      .then((result) => setRandomColor(result.data.hex));
  }, []);

  function handleClick() {
    axios
      .get("https://random-color.onrender.com/colors/random")
      .then((result) => setRandomColor(result.data.hex));
  }

  return (
    <div style={{ backgroundColor: randomColor }}>
      <button className="button" onClick={handleClick}>
        Change Background Color
      </button>
    </div>
  );
}

export default App;
