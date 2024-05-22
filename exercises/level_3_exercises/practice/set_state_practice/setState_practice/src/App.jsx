import React from "react";
import "./App.css";

/**
             1. Pass in a new color of your choosing in place of the old one. 
            Hint: we don’t care what the previous color was.

 */

// function App() {
//   const [color, setColor] = React.useState("pink");

//   function handleClick() {
//     setColor("red");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>{color}</button>
//     </div>
//   );
// }

/**
             2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.

 */

// function App() {
//   const [color, setColor] = React.useState(true);

//   function handleClick() {
//     setColor((prevColor) => !prevColor);
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>{color ? "pink" : "blue"}</button>
//     </div>
//   );
// }

/** 
             3. Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.
*/

function App() {
  const [colors, setColors] = React.useState(["pink", "blue"]);

  function handleClick() {
    setColors((prevColors) => [...prevColors, "green"]);
  }

  return (
    <div>
      <button onClick={handleClick}>{colors}</button>
    </div>
  );
}

export default App;
