import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

class App extends Component {
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

  // searchHandler = e => {
  //   const posts = this.state.data.filter(post => {
  //     if (post.username.includes(e.target.value)) {
  //       return post;
  //     }
  //     return null;
  //   });
  //   this.setState({ searchPosts: posts });
  // };

  render() {
    let filteredSearch = this.state.data
      .map(post => {
        return <div post={post} />;
      })
      .filter(post => {
        return post.username.indexOf(this.state.search) !== -1;
      });
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          searchHandler={this.searchHandler}
          updateSearch={this.updateSearch}
        />
        <PostContainer
          data={
            this.state.searchPosts.length <= 0
              ? this.state.data
              : this.state.searchPosts
          }
        />
      </div>
    );
  }
}

export default App;
