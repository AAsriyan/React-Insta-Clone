import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const LoginClass = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginLogo = styled.span`
  margin: 10px;
  font-size: 40px;
`;

const LoginHeaderText = styled.h2`
  font-size: 50px;
  font-family: "Billabong";
  margin: 30px 0;
`;

const LoginForm = styled.form`
  display: block;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
`;

const LoginInput = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 14px;
  font-size: 18px;
  color: green;
  display: block;
  margin: 20px;

  :placeholder-shown {
    font-size: 18px;
  }
`;

const Button = styled.button`
  margin: 0 20px;
  width: 100px;
  height: 30px;
  border-radius: 14px;
  font-size: 14px;
`;

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

  handleLogin = () => {
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("password", this.state.password);
  };

  handleErrors = () => {
    alert("Signing Up is not possible at this time.");
  };

  render() {
    return (
      <LoginClass>
        <LoginHeader>
          <LoginLogo>
            <FontAwesomeIcon className="logo" icon={faInstagram} />
          </LoginLogo>
          <LoginHeaderText>Welcome to Instagram</LoginHeaderText>
        </LoginHeader>
        <LoginForm>
          <LoginInput
            className="username"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleAllFormChanges}
            required
          />
          <LoginInput
            className="password"
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleAllFormChanges}
            required
          />
          <Button onClick={this.handleLogin}>Login</Button>
          <Button onClick={this.handleErrors}>Sign Up</Button>
        </LoginForm>
      </LoginClass>
    );
  }
}

export default Login;
