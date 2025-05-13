import React from "react";
// ! ----- IMPORT CSS -----
import "./SideLink.css";
// ! ----- SIDELINK COMPONENT -----
const SideLink = ({ image, text , onClick }) => {
  return (
    <div className="side-link">
      <img src={image} alt="alt text" onClick={onClick} />
      <p>{text}</p>
    </div>
  );
};

export default SideLink;
