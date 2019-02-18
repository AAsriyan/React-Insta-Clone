import React, { Component } from "react";
import dummyData from "./dummy-data";
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
        <h1>This Works</h1>
      </div>
    );
  }
}

export default App;
