import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

export const PostPage = props => {
  return (
    <div>
      <SearchBar
        search={props.search}
        searchHandler={props.searchHandler}
        updateSearch={props.updateSearch}
      />
      <PostContainer
        // data={
        //   this.state.searchPosts.length <= 0
        //     ? this.state.data
        //     : this.state.searchPosts
        // }
        data={props.data}
        search={props.search}
      />
    </div>
  );
};

export default PostPage;
