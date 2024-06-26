import React, { useContext } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { ThingContext } from "./components/ThingProvider";

function App() {
  const { things } = useContext(ThingContext);

  return (
    <div>
      <Form />
      <List things={things} />
    </div>
  );
}

export default App;
