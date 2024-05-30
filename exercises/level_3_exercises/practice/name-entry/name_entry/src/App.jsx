import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setList((prevList) => [...prevList, text]);
  }

  function renderList() {
    return list.map((item) => {
      return <li>{item}</li>;
    });
  }

  return (
    <div>
      <input
        type="text"
        placeHolder="Your Text Here"
        name="input"
        className="textInput"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
      <h1>{text}</h1>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default App;
