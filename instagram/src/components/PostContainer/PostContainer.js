import React from "react";
import Post from "./Post";
import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div>
      {props.data.map(post => (
        <Post key={post.imageUrl} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
