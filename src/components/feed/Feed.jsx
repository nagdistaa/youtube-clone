import React from "react";
//!  <----- IMPORT CSS ----->
import "./Feed.css";
// ! <----- IMPORT IMAGES ----->
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import Card from "../card/Card";
//!  <----- START FEED COMPONENT ----->
const Feed = () => {
  // ! <----- RETUREN COMPONENT ----->
  return (
    <div className="feed">
      {/* <----- CARD 1 -----> */}
      <Card
        cardImage={thumbnail1}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />

      {/* <----- CARD 2 -----> */}
      <Card
        cardImage={thumbnail2}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 3 -----> */}
      <Card
        cardImage={thumbnail3}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 4 -----> */}
      <Card
        cardImage={thumbnail4}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 5 -----> */}
      <Card
        cardImage={thumbnail5}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 6 -----> */}
      <Card
        cardImage={thumbnail6}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 7 -----> */}
      <Card
        cardImage={thumbnail7}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 8 -----> */}
      <Card
        cardImage={thumbnail8}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 1 -----> */}
      <Card
        cardImage={thumbnail1}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />

      {/* <----- CARD 2 -----> */}
      <Card
        cardImage={thumbnail2}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 3 -----> */}
      <Card
        cardImage={thumbnail3}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 4 -----> */}
      <Card
        cardImage={thumbnail4}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 5 -----> */}
      <Card
        cardImage={thumbnail5}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 6 -----> */}
      <Card
        cardImage={thumbnail6}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 7 -----> */}
      <Card
        cardImage={thumbnail7}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
      {/* <----- CARD 8 -----> */}
      <Card
        cardImage={thumbnail8}
        cardName="Nagdista Channel"
        cardTitle="Best Channel To Learn Front End"
        cardTotalViews="15K views"
        cardUploadedTime="2 days ago"
      />
    </div>
  );
};

export default Feed;
