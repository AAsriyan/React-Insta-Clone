import React from "react";
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
    </div>
  );
};

export default PostContainer;
