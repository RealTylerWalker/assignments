import React from "react";

function VacationCards(props) {
  const { item } = props;

  const timeClass =
    item.timeToGo === "Spring"
      ? "card-spring"
      : item.timeToGo === "Summer"
      ? "card-summer"
      : item.timeToGo === "Fall"
      ? "card-fall"
      : item.timeToGo === "Winter"
      ? "card-winter"
      : "";

  const priciness =
    item.price > 1000
      ? "$$$"
      : item.price > 500
      ? "$$"
      : item.price < 500
      ? "$"
      : "";

  return (
    <div className={timeClass}>
      <img
        src={`../public/images/${props.item.cardImg}`}
        className="card-image"
      />
      <div className="card-details">
        <h3>{props.item.place}</h3>
        <p>
          <strong>PRICE:</strong> ${props.item.price}
        </p>
        <p>
          <strong>WHEN TO GO:</strong> {props.item.timeToGo}
        </p>
      </div>
      <p>{`Priciness: ${priciness}`}</p>
    </div>
  );
}

export default VacationCards;
