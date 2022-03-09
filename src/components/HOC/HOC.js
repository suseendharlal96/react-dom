import React from "react";

const HOC = (WrappedComponent) => {
  return function NewComponent({ isLoad, time, ...props }) {
    if (isLoad) return <p>Pls Wait for {time} sec</p>;
    return <WrappedComponent {...props} />;
  };
};

export default HOC;
