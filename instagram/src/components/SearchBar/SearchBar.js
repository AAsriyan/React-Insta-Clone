import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHeart,
  faCompass,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <FontAwesomeIcon className="logo" icon={faInstagram} />
        <h1>Instagram</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" name="search" />
      </div>
      <div className="profile-icons">
        <FontAwesomeIcon icon={faCompass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default SearchBar;
