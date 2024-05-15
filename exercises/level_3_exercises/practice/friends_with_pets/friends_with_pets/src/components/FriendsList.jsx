import React from "react";
import Pets from "../components/Pets";

function FriendsList(props) {
  const petArray = props.friend.pets;
  const petInfo = petArray.map((pet) => {
    return <Pets id={pet.id} pet={pet} />;
  });
  return (
    <div className="friend-container">
      <div className="name-age">
        <p className="friend-id">{`${props.friend.id}) `}</p>
        <h1>{props.friend.name}</h1>
        <p>
          <em>Age: </em>
          {props.friend.age}
        </p>
      </div>
      {petInfo}
    </div>
  );
}

export default FriendsList;
