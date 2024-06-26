import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div>
      <ul>
        {props.things.map((thing) => (
          <ListItem key={thing._id} thing={thing} />
        ))}
      </ul>
    </div>
  );
}
