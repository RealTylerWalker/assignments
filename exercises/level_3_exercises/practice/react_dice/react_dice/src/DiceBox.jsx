import React from "react";

export default function DiceBox() {
  const [numbers, setNumbers] = React.useState([0, 0, 0, 0, 0]);

  function getRandomNumbers() {
    setNumbers(numbers.map((number) => Math.floor(Math.random() * 6 + 1)));
  }

  return (
    <div className="card">
      <p>🎲 Roll the Dice 🎲</p>

      <button onClick={getRandomNumbers}>{numbers.join(" , ")}</button>
    </div>
  );
}
