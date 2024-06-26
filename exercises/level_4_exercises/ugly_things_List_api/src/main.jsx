import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThingProvider from "./components/ThingProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThingProvider>
      <App />
    </ThingProvider>
  </React.StrictMode>
);
