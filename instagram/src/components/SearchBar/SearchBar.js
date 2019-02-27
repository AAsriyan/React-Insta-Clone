import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCompass,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  margin-bottom: 70px;
  max-width: 900px;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const LogoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 40px;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid gray;
  cursor: pointer;
`;

const TextHeader = styled.h1`
  font-weight: 400;
  font-family: "Billabong", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 40px;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  width: 100%;
`;

const SearchInput = styled.input`
  max-width: 200px;
  width: 100%;
  height: 25px;
  border-radius: 0px;
`;

const ProfileIcons = styled.div`
  cursor: pointer;
  display: flex;
  max-width: 150px;
  width: 100%;
  font-size: 30px;
  justify-content: space-between;
  align-items: center;
`;

const SearchBar = props => {
  return (
    <SearchHeader>
      <LogoHeader>
        <Logo>
          <FontAwesomeIcon icon={faInstagram} />
        </Logo>
        <TextHeader>Instagram</TextHeader>
      </LogoHeader>
      <Search>
        <SearchInput
          type="text"
          placeholder="Search"
          name="search"
          value={props.search}
          onKeyDown={props.searchHandler}
          onChange={props.updateSearch}
        />
      </Search>
      <ProfileIcons>
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
      </ProfileIcons>
    </SearchHeader>
  );
};

export default SearchBar;
