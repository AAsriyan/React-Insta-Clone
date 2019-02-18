import React from "react";
import AddComment from "./AddComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import "./CommentSection.css";
var moment = require("moment");

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="comment-icons">
        <FontAwesomeIcon className="heart" icon={faHeart} />
        <FontAwesomeIcon className="comment" icon={faComment} />
      </div>
      <h3>{props.data.likes} likes</h3>
      <div>
        {props.data.comments.map(comment => {
          return (
            <div className="comment-post" key={comment.username}>
              <h2>{comment.username}: </h2>
              <p>{comment.text}</p>
            </div>
          );
        })}
        <div className="moment-post">
          {moment()
            .startOf("hour")
            .fromNow()}
        </div>
      </div>
      <AddComment />
    </div>
  );
};

CommentSection.propTypes = {
  data: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
};

export default CommentSection;
