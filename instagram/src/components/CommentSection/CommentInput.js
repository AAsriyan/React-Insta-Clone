import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./CommentSection.css";

const CommentInput = props => {
  return (
    <div className="add-comment">
      <form onSubmit={props.submitComment}>
        <input
          className="add-comment-input"
          type="text"
          value={props.comment}
          placeholder="Add comment... "
          onChange={props.changeComment}
        />
      </form>
      <FontAwesomeIcon className="input-icon" icon={faEllipsisH} />
    </div>
  );
};

export default CommentInput;
