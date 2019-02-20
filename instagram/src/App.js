import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostPage from "./components/PostContainer/PostPage";
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

  // Old serach function, keeping it as reference
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
    return (
      <div className="App">
        <PostPage
          search={this.state.search}
          searchHandler={this.searchHandler}
          updateSearch={this.updateSearch}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
