import React from "react";
// ! <----- IMPORT CSS ----->
import "./VideoDiscription.css";
// ! <----- IMPORT ASSETS ----->
import userProfile from "../../assets/user_profile.jpg";
// ! <----- IMPORT COMPONENTS ----->
import Comment from "../comment/Comment";

// ! <----- MAIN COMPONENT ----->
const VideoDiscription = ({
  discriptionContent1,
  discriptionContent2,
  commentsNumber,
}) => {
  // ! <----- RETURN COMPONENT ----->

  return (
    <div className="vid-description">
      <p>{discriptionContent1}</p>
      <p>{discriptionContent2}</p>
      <hr />
      <h4>{commentsNumber}</h4>
      {/* <----- COMMENTS -----> */}
      <Comment
        commenterImage={userProfile}
        commenterContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        commenterLikes="244"
        commenterName="Jack Nicholson"
        commenterTime="1 day ago"
      />
      <Comment
        commenterImage={userProfile}
        commenterContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        commenterLikes="244"
        commenterName="Jack Nicholson"
        commenterTime="1 day ago"
      />
      <Comment
        commenterImage={userProfile}
        commenterContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        commenterLikes="244"
        commenterName="Jack Nicholson"
        commenterTime="1 day ago"
      />
      <Comment
        commenterImage={userProfile}
        commenterContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        commenterLikes="244"
        commenterName="Jack Nicholson"
        commenterTime="1 day ago"
      />
      <Comment
        commenterImage={userProfile}
        commenterContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        commenterLikes="244"
        commenterName="Jack Nicholson"
        commenterTime="1 day ago"
      />
    </div>
  );
};

export default VideoDiscription;
