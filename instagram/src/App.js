import React, { Component } from "react";
import PostPage from "./components/PostContainer/PostPage";
import authenticate from "./components/authenticate/authenticate";
import Login from "./components/Login/Login";
import "./App.css";

//Authenticate(<App />);

class App extends Component {
  constructor() {
    super();
    this.state = {
      text:
        "just put this in here to shut react up because it wants me to refactor this into a functional component"
    };
  }

  // Old search function, keeping it as reference
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
        <PostPage />
      </div>
    );
  }
}

export default authenticate(App)(Login);
