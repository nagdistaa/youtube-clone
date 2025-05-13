import React from "react";
//! <----- IMPORT CSS ----->
import "./Recommended.css";
//! <----- IMPORT COMPONENTS ----->

//! <----- IMPORT ASSETS ----->
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import SideVideoList from "../sideVideoList/SideVideoList";
//! <----- MAIN COMPONENT ----->

const Recommended = () => {
  //! <----- RETURN COMPONENT ----->

  return (
    <div className="recommended">
      {/* <----- SIDE VIDEO LIST 1 -----> */}
      <SideVideoList sideVideoListImg={thumbnail1}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 2 -----> */}
      <SideVideoList sideVideoListImg={thumbnail2}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 3 -----> */}
      <SideVideoList sideVideoListImg={thumbnail3}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 4 -----> */}
      <SideVideoList sideVideoListImg={thumbnail4}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 5 -----> */}
      <SideVideoList sideVideoListImg={thumbnail5}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 6 -----> */}
      <SideVideoList sideVideoListImg={thumbnail6}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 7 -----> */}
      <SideVideoList sideVideoListImg={thumbnail7}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      {/* <----- SIDE VIDEO LIST 8 -----> */}
      <SideVideoList sideVideoListImg={thumbnail8}  sideVideoListTitle="Video 1 On This Channel" sideVideoListChannelName="Nagdista Channel" sideVideoListViews="15k views"/>
      </div>
  );
};

export default Recommended;
