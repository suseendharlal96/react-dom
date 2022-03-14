import React from "react";

const SuspenceHOC = (Component) => {
    console.log('sd');
  return () => {
    return (
      <React.Suspense fallback={<h2>loading</h2>}>
        <Component />
      </React.Suspense>
    );
  };
};

export default SuspenceHOC;
