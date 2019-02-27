import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentPost = styled.div`
  display: flex;
  margin: 5px 10px;
`;

const CommentUsername = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Comment = props => {
  return (
    <CommentPost>
      <CommentUsername>{props.comment.username}:</CommentUsername>
      <span>{props.comment.text}</span>
    </CommentPost>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
