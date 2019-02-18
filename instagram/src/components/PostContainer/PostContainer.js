import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          className="profile-pic"
          src={props.data.thumbnailUrl}
          alt={props.data.username}
        />
        <h2 className="username-post">{props.data.username}</h2>
      </div>
      <img className="post-pic" src={props.data.imageUrl} alt="" />
      <CommentSection data={props.data} />
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
};

export default PostContainer;
