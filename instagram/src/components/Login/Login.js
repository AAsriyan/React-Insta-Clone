import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleAllFormChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("password", this.state.password);
  };

  handleErrors = e => {
    alert(
      "Signing Up is not possible at this time. Please wait until I figure out how this stuff works ok?"
    );
  };

  render() {
    return (
      <div className="login">
        <div className="login-header">
          <FontAwesomeIcon className="logo" icon={faInstagram} />
          <h2>Welcome to Instagram</h2>
        </div>
        <form className="login-form">
          <input
            className="username"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleAllFormChanges}
            required
          />
          <input
            className="password"
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleAllFormChanges}
            required
          />
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleErrors}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;
