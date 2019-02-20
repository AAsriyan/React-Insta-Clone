import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
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
    window.location.reload();
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
            value={this.state.username}
            onChange={this.handleAllFormChanges}
            required
          />
          <input
            className="username"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleAllFormChanges}
            required
          />
          <button onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
