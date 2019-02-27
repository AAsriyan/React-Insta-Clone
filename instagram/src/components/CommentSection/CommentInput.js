import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const AddComment = styled.div`
  display: flex;
`;

const CommentForm = styled.form`
  display: flex;
  max-width: 555px;
  width: 100%;
  margin: 20px 0;
  margin-left: 10px;
`;

const CommInput = styled.input`
  display: flex;
  flex-wrap: wrap;
  max-width: 555px;
  width: 100%;
  border: 0;
  font-size: 14px;

  :placeholder-shown {
    font-size: 14px;
  }

  :focus {
    outline: none;
  }
`;

const InputOption = styled.span`
  margin: 20px 0;
  margin-left: 10px;
`;

const CommentInput = props => {
  return (
    <AddComment>
      <CommentForm onSubmit={props.submitComment}>
        <CommInput
          className="add-comment-input"
          type="text"
          value={props.comment}
          placeholder="Add comment... "
          onChange={props.changeComment}
          required
        />
      </CommentForm>
      <InputOption>
        <FontAwesomeIcon className="input-icon" icon={faEllipsisH} />
      </InputOption>
    </AddComment>
  );
};

export default CommentInput;
