import React from "react";
// ! <----- IMPORT CSS ----->
import "./Card.css";
import { Link } from "react-router-dom";
// ! <----- START CARD COMPONENT ----->
const Card = ({
  cardImage,
  cardTitle = "title",
  cardName = "card name",
  cardTotalViews = "0 views",
  cardUploadedTime = "1 minute ago",
}) => {
  // ! <----- CARD RETURN ----->
  return (
    <Link to={`video/20/4512`} className="card">
      <img src={cardImage} alt="thumbnail" />
      <h2>{cardTitle}</h2>
      <h3>{cardName}</h3>
      <p>
        {cardTotalViews} &bull; {cardUploadedTime}
      </p>
    </Link>
  );
};

export default Card;
