import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import "./PostContainer.css";

const LikeSection = props => {
  return (
    <div className="like-section">
      <div className="comment-icons">
        <div onClick={props.addLike}>
          <FontAwesomeIcon className="heart" icon={faHeart} />
        </div>
        <div>
          <FontAwesomeIcon className="comment" icon={faComment} />
        </div>
      </div>
      <h3 className="likes">{props.likes} likes</h3>
    </div>
  );
};

export default LikeSection;
