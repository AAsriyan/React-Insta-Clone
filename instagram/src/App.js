import React, { Component } from "react";
import PostPage from "./components/PostContainer/PostPage";
import authenticate from "./components/authenticate/authenticate";
import Login from "./components/Login/Login";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default authenticate(App)(Login);
