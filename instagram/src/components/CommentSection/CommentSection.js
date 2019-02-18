import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="comment-icons">
        <FontAwesomeIcon className="heart" icon={faHeart} />
        <FontAwesomeIcon className="comment" icon={faComment} />
      </div>
      <h3>{props.data.likes} likes</h3>
      {props.data.comments.map(comment => {
        return (
          <div className="comment-post" key={comment.username}>
            <h2>{comment.username}: </h2>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
