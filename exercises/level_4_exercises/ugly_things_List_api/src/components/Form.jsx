import { useContext, useState } from "react";
import { ThingContext } from "./ThingProvider";

export default function Form() {
  const { createThing } = useContext(ThingContext);
  const [thing, setThing] = useState({
    imgUrl: "",
    title: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setThing((prevThing) => {
      return {
        ...prevThing,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createThing(thing);
    setThing({
      imgUrl: "",
      title: "",
      description: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={thing.imgUrl}
        onChange={handleChange}
        name="imgUrl"
      />
      <input
        type="text"
        placeholder="Title"
        value={thing.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        value={thing.description}
        onChange={handleChange}
        name="description"
      />
      <button>Submit</button>
    </form>
  );
}
