import React from "react";
// ! <----- IMPORT CSS ----->
import "./Video.css";
// ! <----- IMPORT COMPOENTS ----->
import PlayVideo from "../../components/playVideo/PlayVideo";
import Recommended from "../../components/recommended/Recommended";
// ! <----- MAIN COMPONENT ----->
const Video = () => {
  // ! <----- MAIN RETURN ----->
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
