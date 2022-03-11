import React from "react";

import classNames from "./Button.module.css";

const Button = ({ clickHandler, children }, ref) => {
  return (
    <button ref={ref} className={classNames.button} onClick={clickHandler}>
      {children ? children : "Click me"}
    </button>
  );
};

export default React.forwardRef(Button);
