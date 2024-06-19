import { useState } from "react";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import FooterComp from "./components/FooterComp";
import ThemeContext from "./context/ThemeContext";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div className="componentContainer">
      <ThemeContext.Provider
        value={{
          theme: theme,
          toggleTheme: toggleTheme,
        }}
      >
        <HeaderComp />
        <BodyComp />
        <FooterComp />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
