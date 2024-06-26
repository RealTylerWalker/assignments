import React, { useContext } from "react";
import ListItem from "./ListItem";
import { ThingContext } from "./ThingProvider";

export default function List() {
  const { things, deleteThing } = useContext(ThingContext);
  return (
    <div>
      <ul>
        {things.map((thing) => (
          <ListItem key={thing._id} thing={thing} deleteThing={deleteThing} />
        ))}
      </ul>
    </div>
  );
}
