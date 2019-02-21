import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import styled from "styled-components";

const PostContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  border: 1px solid lightgray;
  margin-bottom: 60px;
`;

const PostPic = styled.img`
  max-width: 600px;
  width: 100%;
`;

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
    this.setState({ likes: addLike });
  };

  render() {
    return (
      <PostContainer>
        <PostHeader
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username}
        />
        <div>
          <PostPic
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
      </PostContainer>
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
