import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 10px;
`;

const ProfPic = styled.img`
  margin: 5px;
  width: 30px;
  border-radius: 50%;
`;

const UsernamePost = styled.div`
  font-weight: bold;
  margin: 0px;
`;

const PostHeader = props => {
  return (
    <Header>
      <div>
        <ProfPic src={props.thumbnailUrl} alt="" />
      </div>
      <UsernamePost>{props.username}</UsernamePost>
    </Header>
  );
};

export default PostHeader;
