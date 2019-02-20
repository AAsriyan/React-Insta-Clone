import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./PostContainer.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLike = e => {
    e.preventDefault();
    const addLike = this.state.likes + 1;
    //let counterPlus = copyLikes + 1;
    this.setState({ likes: addLike });
  };

  render() {
    return (
      <div className="post-container">
        <PostHeader
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username}
        />
        <div>
          <img
            className="post-pic"
            src={this.props.post.imageUrl}
            alt="post thumbnail"
          />
        </div>
        <LikeSection likes={this.state.likes} addLike={this.addLike} />
        <CommentSection
          comments={this.props.post.comments}
          postId={this.props.post.imageUrl}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
