import React from "react";

function Pets(props) {
  return (
    <div className="pet-container">
      <div>
        <p className="pet-id">{`${props.pet.id}) `}</p>
      </div>

      <div className="name-breed-container">
        <p>
          <strong> Pet Name: </strong>
          {`${props.pet.name} `}
        </p>
        <p>
          <strong>Breed: </strong>
          {props.pet.breed}
        </p>
      </div>
    </div>
  );
}

export default Pets;
