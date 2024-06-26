import React from "react";
import EditForm from "./EditForm";

export default function ListItem({ thing, deleteThing }) {
  const [showEditForm, setShowEditForm] = React.useState(false);

  return (
    <li style={{ listStyle: "none" }}>
      <img src={thing.imgUrl} width={100} />
      <h2>{thing.title}</h2>
      <p>{thing.description}</p>
      <button onClick={() => deleteThing(thing._id)}>Delete</button>
      <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>

      {showEditForm ? (
        <EditForm thing={thing} setShowEditForm={setShowEditForm} />
      ) : null}
    </li>
  );
}
