import React from "react";
// ! <----- IMPORT CSS ----->
import "./PlayVideo.css";
// ! <----- IMPORT ASSETS ----->
import video1 from "../../assets/video.mp4";

import profileImg from "../../assets/profile.png";
import VideoPublisher from "../videoPublisher/VideoPublisher";
import VideoDiscription from "../videoDiscripton/VideoDiscription";
import VideoInfo from "../videoInfo/VideoInfo";
// ! <----- PLAY VIDEO COMPONENT ----->
const PlayVideo = () => {
  // ! <----- PLAY VIDEO RETURN ----->

  return (
    <div className="play-video">
      <VideoInfo
        videoSrc={video1}
        videoLikes="125"
        videoName="Best YouTueb Channel On This World"
        videoPublishdTime="2 days ago"
        videoViews="1525 Views"
      />
      <hr />
      {/*  PUBLISHER INFO IMG NAME SUBSCRIBERS */}
      <VideoPublisher
        publisherImg={profileImg}
        publisherName="Nagdista"
        publisherSubscribers="1M Subscribers"
      />
      {/* <----- VIDEO DISCRIPTION AND COMMENTS -----> */}
      <VideoDiscription
        discriptionContent1="Channel That Make Every thing Easy"
        discriptionContent2="Subscribe To Watch More Tutorails"
        commentsNumber="130 comments"
      />
    </div>
  );
};

export default PlayVideo;
