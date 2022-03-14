import React from "react";

import PropTypes from "prop-types";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false, errorInfo: "" };
  }

  componentDidCatch(err, errInfo) {
    console.log({ err, errInfo });
    this.setState((prev) => ({ ...prev, isError: true, errorInfo: err }));
  }

  render() {
    if (this.state.isError) {
      return (
        <>
          <h2>Something Wrong</h2>
          <details>
            <summary>Error Info</summary>
            <p>{this.state.errorInfo.message}</p>
            <p>{this.state.errorInfo.stack}</p>
          </details>
        </>
      );
    }
    return this.props.children;
  }
}

Error.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Error;
