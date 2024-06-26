import React from "react";

export default function ListItem(props) {
  return (
    <li style={{ listStyle: "none" }}>
      <img src={props.thing.imgUrl} width={100} />
      <h2>{props.thing.title}</h2>
      <p>{props.thing.description}</p>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}
