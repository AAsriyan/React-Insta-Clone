import React from "react";

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checkLog: false
      };
    }

    componentDidMount() {
      !localStorage.getItem("user")
        ? this.setState({ checkLog: false })
        : this.setState({ checkLog: true });
    }
    render() {
      if (this.state.checkLog) {
        return <App />;
      }
      return <Login />;
    }
  };

export default authenticate;
