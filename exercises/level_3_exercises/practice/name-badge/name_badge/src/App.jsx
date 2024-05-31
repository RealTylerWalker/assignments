import { useState } from "react";
import InfoForm from "./InfoForm.jsx";
import Badge from "./Badge.jsx";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favFood: "",
    about: "",
  });
  const [showBadge, setShowBadge] = useState(false);

  const updateFormData = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleClick(event) {
    event.preventDefault();
    setShowBadge(true);
    console.log(showBadge);
  }

  return (
    <div>
      <InfoForm updateFormData={updateFormData} onClick={handleClick} />
      {showBadge && <Badge formData={formData} />}
    </div>
  );
  f;
}

export default App;
