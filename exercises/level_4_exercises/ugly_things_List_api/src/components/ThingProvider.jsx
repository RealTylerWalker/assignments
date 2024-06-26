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

    //
    // make POST
    // add item to array with setThings()
  }

  function getThings() {
    axios
      .get("https://api.vschool.io/tylerwalker/thing")
      .then((response) => {
        setThings(response.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteThing(id) {}

  return (
    <ThingContext.Provider
      value={{
        things,
        createThing,

        // delete
        // update
      }}
    >
      {children}
    </ThingContext.Provider>
  );
}
