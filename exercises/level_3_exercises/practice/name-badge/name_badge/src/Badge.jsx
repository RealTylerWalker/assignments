import React from "react";
import "./Badge.css";
function Badge({ formData }) {
  return (
    <div className="badgeContainer">
      <div className="titleContainer">
        <h1 className="title">Badge:</h1>
      </div>
      <div className="badgeDetails">
        <h4 className="badgeName">
          Name: {`${formData.firstName} ${formData.lastName}`}
        </h4>
        <h4 className="badgePhone">Phone: {`${formData.phone}`}</h4>
        <h4 className="badgeBirth">
          Place of birth:{`${formData.birthPlace}`}
        </h4>
        <h4 className="badgeFavFood">Favorite food: {`${formData.favFood}`}</h4>
        <h4 className="badgeEmail">Email: {`${formData.email}`}</h4>
      </div>
      <div className="aboutContainer">
        <p className="badgeAbout">About me: {`${formData.about}`}</p>
      </div>
    </div>
  );
}
export default Badge;
