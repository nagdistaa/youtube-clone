import React from "react";
// ! <----- IMPORT CSS ----->
import './VideoPublisher.css'
// ! <----- MAIN COMPONENT ----->

const VideoPublisher = ({
  publisherImg,
  publisherName,
  publisherSubscribers,
}) => {
  // ! <----- RETURN COMPONENT ----->

  return (
    <div className="publisher">
      <img src={publisherImg} alt="profile img" />
      {/* CHANNEL NAME AND SUBSCRIBERS */}
      <div className="">
        <p>{publisherName}</p>
        <span>{publisherSubscribers}</span>
      </div>
      <button>Subscribe</button>
    </div>
  );
};

export default VideoPublisher;
