import React from "react";
import FriendsList from "../components/FriendsList";
import friendsObject from "../friendsObject";

function Friend() {
  const friends = friendsObject.map((item) => {
    return <FriendsList key={item.id} friend={item} />;
  });
  return <div>{friends}</div>;
}

export default Friend;
