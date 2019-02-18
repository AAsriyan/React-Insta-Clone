import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./CommentSection.css";

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: ""
    };
  }
  render() {
    return (
      <div className="add-comment">
        <form>
          <input
            className="add-comment-input"
            type="text"
            placeholder="Add a comment..."
            name="comment"
          />
        </form>
        <FontAwesomeIcon className="input-icon" icon={faEllipsisH} />
      </div>
    );
  }
}

export default AddComment;
