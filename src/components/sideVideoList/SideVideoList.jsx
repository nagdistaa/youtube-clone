import React from "react";
//! <----- IMPORT CSS ----->
import "./SideVideoList.css";
//! <----- IMPORT ASSETS ----->

//! <----- IMPORT COMPONENTS ----->
//! <----- MAIN COMPONENT ----->

const SideVideoList = ({
  sideVideoListImg,
  sideVideoListTitle = "Default Title",
  sideVideoListViews = "0 views",
  sideVideoListChannelName = "Channel Name",
}) => {
  //! <----- RETURN COMPONENT ----->

  return (
    <div className="side-video-list">
      <img src={sideVideoListImg} alt="video image" />
      <div className="vid-info">
        <h4>{sideVideoListTitle}</h4>
        <p>{sideVideoListChannelName}</p>
        <p>{sideVideoListViews}</p>
      </div>
    </div>
  );
};

export default SideVideoList;
