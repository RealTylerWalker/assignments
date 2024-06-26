import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThingContext = createContext();

export default function ThingProvider({ children }) {
  const [things, setThings] = useState([]);

  useEffect(() => {
    getThings();
  }, []);

  function createThing(thing) {
    axios
      .post("https://api.vschool.io/tylerwalker/thing", thing)
      .then((response) => {
        setThings((prevThings) => [...prevThings, response.data]);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getThings() {
    axios
      .get("https://api.vschool.io/tylerwalker/thing")
      .then((response) => {
        setThings(response.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteThing(id) {
    axios
      .delete(`https://api.vschool.io/tylerwalker/thing/${id}`)
      .then(() => getThings())
      .catch((err) => console.log(err));
  }

  function updateThing(id, thing) {
    axios
      .put(`https://api.vschool.io/tylerwalker/thing/${id}`, thing)
      .then((response) => {
        setThings((prevThings) =>
          prevThings.map((prevThing) => {
            return prevThing._id === id ? response.data : prevThing;
          })
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <ThingContext.Provider
      value={{
        things,
        createThing,
        deleteThing,
        updateThing,
      }}
    >
      {children}
    </ThingContext.Provider>
  );
}
