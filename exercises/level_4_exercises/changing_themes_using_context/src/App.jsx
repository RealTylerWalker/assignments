import { useState } from "react";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";
import { ThemeContextProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <div className="componentContainer">
      <ThemeContextProvider>
        <HeaderComp />
        <BodyComp />
        <FooterComp />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
