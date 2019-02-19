import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(data => (
          <PostContainer data={data} key={data.username} />
        ))}
      </div>
    );
  }
}

export default App;
