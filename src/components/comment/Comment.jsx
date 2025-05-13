import React from "react";

//! <----- IMPORT CSS ----->
import "./Comment.css";

//! <----- IMPORT ASSETS ----->
import like from "../../assets/like.png";
import disLike from "../../assets/dislike.png";

//! <----- MAIN COMPONENT ----->

const Comment = ({
  commenterImage,
  commenterName,
  commenterTime,
  commenterContent,
  commenterLikes,
}) => {
  //! <----- RETURN COMPONENT ----->
  return (
    <div className="comment">
      <img src={commenterImage} alt="user" />
      <div className="">
        <h3>
          {commenterName}
          <span>{commenterTime}</span>
        </h3>
        <p>{commenterContent}</p>
        <div className="comment-action">
          <img src={like} alt="like" />
          <span>{commenterLikes}</span>
          <img src={disLike} alt="disLike" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
