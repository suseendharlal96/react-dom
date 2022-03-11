import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false, errorInfo: "" };
  }

  componentDidCatch(err, errInfo) {
    console.log({ err, errInfo });
    this.setState((prev) => ({ ...prev, isError: true }));
  }

  render() {
    if (this.state.isError) {
      return <h2>Something Wrong</h2>;
    }
    return this.props.children;
  }
}
export default Error;
