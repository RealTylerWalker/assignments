import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <hr className="hero-separator" />
      <Footer />
    </div>
  );
}

export default App;
