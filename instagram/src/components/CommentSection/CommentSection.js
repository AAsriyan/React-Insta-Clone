import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  handleChanges = e => {
    this.setState({ comment: e.target.value });
  };
  // My adding function
  handleSubmit = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.comment,
      username: localStorage.getItem("user")
    };
    const copyComments = this.state.comments;
    this.setState({ comments: [...this.state.comments, newComment] });
    this.setState({ copyComments, comment: "" });
  };
  // Lame Solution code
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const newComment = { text: this.state.comment, username: "admin" };
  //   const comments = this.state.comments.slice();
  //   comments.push(newComment);
  //   this.setState({ comments, comment: "" });
  // };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleSubmit}
          changeComment={this.handleChanges}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
