import { useState } from "react";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";

import "./App.css";

function App() {
  return (
    <div className="componentContainer">
      <HeaderComp />
      <BodyComp />
      <FooterComp />
    </div>
  );
}

export default App;
