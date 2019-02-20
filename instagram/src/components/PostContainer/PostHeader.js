import React from "react";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="thumbnail-img">
        <img className="profile-pic" src={props.thumbnailUrl} alt="" />
      </div>
      <div className="username-post">{props.username}</div>
    </div>
  );
};

export default PostHeader;
