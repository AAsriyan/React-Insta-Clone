import React from "react";
import Post from "./Post";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let filteredPosts = this.props.data.filter(post => {
      return post.username.toLowerCase().indexOf(this.props.search) !== -1;
    });
    return (
      <div>
        {filteredPosts.map(post => (
          <Post key={post.imageUrl} post={post} />
        ))}
      </div>
    );
  }
}

export default PostContainer;
