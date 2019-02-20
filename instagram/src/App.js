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
      searchPosts: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchHandler = e => {
    console.log(e.target);
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ searchPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchHandler={this.searchHandler} />
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
