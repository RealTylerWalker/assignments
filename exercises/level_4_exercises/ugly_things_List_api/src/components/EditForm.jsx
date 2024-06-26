import { useState, useContext } from "react";
import { ThingContext } from "./ThingProvider";

export default function EditForm({ thing, setShowEditForm }) {
  const { updateThing } = useContext(ThingContext);

  const [editThing, setEditThing] = useState({
    imgUrl: thing.imgUrl,
    title: thing.title,
    description: thing.description,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEditThing((prevThing) => {
      return {
        ...prevThing,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateThing(thing._id, editThing);
    setShowEditForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={"Image URL"}
        value={editThing.imgUrl}
        onChange={handleChange}
        name="imgUrl"
      />
      <input
        type="text"
        placeholder="Title"
        value={editThing.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        value={editThing.description}
        onChange={handleChange}
        name="description"
      />
      <button>Submit</button>
    </form>
  );
}
