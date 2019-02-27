import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const CommentIcons = styled.div`
  margin: 5px 10px;
  display: flex;
`;

const Heart = styled.div`
  margin: 5px;
  font-size: 25px;
  cursor: pointer;
`;

const Comment = styled.div`
  margin: 5px;
  font-size: 25px;
  cursor: pointer;
`;

const Likes = styled.h3`
  font-weight: bold;
  margin: 5px 10px;
`;

const LikeSection = props => {
  return (
    <>
      <CommentIcons className="comment-icons">
        <Heart onClick={props.addLike}>
          <FontAwesomeIcon className="heart" icon={faHeart} />
        </Heart>
        <Comment>
          <FontAwesomeIcon className="comment" icon={faComment} />
        </Comment>
      </CommentIcons>
      <Likes>{props.likes} likes</Likes>
    </>
  );
};

export default LikeSection;
