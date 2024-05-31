import React from "react";
import "./InfoForm.css";

export default function InfoForm({ updateFormData, onClick }) {
  return (
    <div className="form-container">
      <form>
        <div className="inputContainer">
          <input
            type="text"
            name="firstName"
            placeHolder="First Name"
            className="firstName"
            onChange={updateFormData}
          />
          <input
            type="text"
            name="lastName"
            placeHolder="Last Name"
            className="lastName"
            onChange={updateFormData}
          />
          <input
            type="text"
            name="email"
            placeHolder="Email"
            className="email"
            onChange={updateFormData}
          />
          <input
            type="text"
            name="birthPlace"
            placeHolder="Place of Birth"
            className="birthPlace"
            onChange={updateFormData}
          />
          <input
            type="text"
            name="phone"
            placeHolder="Phone Number"
            className="phoneNumber"
            onChange={updateFormData}
          />
          <input
            type="text"
            name="favFood"
            placeHolder="Favorite Food"
            className="favFood"
            onChange={updateFormData}
          />
          <input
            type="text"
            name="about"
            placeHolder="Tell us about yourself..."
            className="about"
            onChange={updateFormData}
          />
        </div>
        <div className="buttonContainer">
          <button className="submit" onClick={onClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
