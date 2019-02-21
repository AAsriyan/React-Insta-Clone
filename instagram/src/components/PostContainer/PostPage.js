import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

export class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchPosts: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.search}
          searchHandler={this.searchHandler}
          updateSearch={this.updateSearch}
        />
        <PostContainer
          // data={
          //   this.state.searchPosts.length <= 0
          //     ? this.state.data
          //     : this.state.searchPosts
          // }
          data={this.state.data}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default PostPage;
