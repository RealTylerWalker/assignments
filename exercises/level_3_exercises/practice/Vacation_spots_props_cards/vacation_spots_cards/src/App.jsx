import React from "react";
import VacationCards from "./VacationCards";
import cardInfo from "./cardInfo";
import "./App.css";

function App() {
  const spots = cardInfo.map((item) => {
    return <VacationCards key={item.id} item={item} />;
  });
  return <div className="card-container">{spots}</div>;
}

export default App;
