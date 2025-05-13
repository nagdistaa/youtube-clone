import React from "react";
// ! <----- IMPORT CSS ----->
import './videoInfo.css'
// ! <----- IMPORT ASSETS ----->
import like from "../../assets/like.png";
import disLike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
// ! <----- MAIN COMPONENT ----->
const VideoInfo = ({
  videoSrc,
  videoName,
  videoViews,
  videoPublishdTime,
  videoLikes,
}) => {
  // ! <----- RETURN COMPONENT ----->
  return (
    <>
      <video src={videoSrc} controls autoPlay muted />
      <h3>{videoName}</h3>
      {/* <----- PLAY VIDEO INFO -----> */}
      <div className="play-video-info">
        <p>
          {videoViews} &bull; {videoPublishdTime}
        </p>
        {/* <----- LIKE DISLIKE SHARE SAVE -----> */}
        <div className="">
          <span>
            <img src={like} alt="likke image" />
            {videoLikes}
          </span>
          <span>
            <img src={disLike} alt="likke image" />2
          </span>
          <span>
            <img src={share} alt="likke image" />
            share
          </span>
          <span>
            <img src={save} alt="likke image" />
            save
          </span>
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
