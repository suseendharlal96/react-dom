import React from "react";

import classes from "./Form.module.css";

const Input = ({ id, name, type, placeholder, isValidationRequired, isValid, isTouched, validations, changed, ...rest }) => {
  let customElement = null;

  switch (type) {
    case "text":
    case "number":
      customElement = (
        <>
          <h4>{name}</h4>
          <input
            className={!isValid && isTouched ? [classes.name, classes.invalid].join(" ") : classes.name}
            type={type}
            id={name}
            placeholder={placeholder}
            value={rest?.value}
            onChange={({ target: { value } }) => changed(value, id)}
          />
        </>
      );
      break;
    case "radio":
      customElement = (
        <>
          <h4>{name}</h4>
          {rest?.options?.map((op) => (
            <React.Fragment key={op}>
              <input
                className={!isValid && isTouched ? classes.invalid : ""}
                type={type}
                checked={rest.value === op}
                value={op}
                id={op}
                onChange={({ target: { value } }) => changed(value, id)}
                ></input>
              <label htmlFor={op}>{op}</label>
              <br />
            </React.Fragment>
          ))}
        </>
      );
      break;
    case "select":
      customElement = (
        <>
          <h4>{name}</h4>
          <select value={rest.value} onChange={({ target: { value } }) => changed(value, id)}>
            <option disabled value="">
              {placeholder}
            </option>
            {rest?.options?.map((op) => (
              <option key={op.key} value={op.key}>
                {op.val}
              </option>
            ))}
          </select>
        </>
      );
      break;
    default:
      return customElement;
  }
  return (
    <div>
      <>{customElement}</>
    </div>
  );
};

export default Input;
