import React from "react";

import classNames from "./Checkbox.module.css";

const CheckboxChild = ({ list, updateCheckbox }) => {
  return (
    <li className={classNames.moveLeft}>
      <input onChange={updateCheckbox} type="checkbox" id={list.id} />
      <label htmlFor={list.id}>{list.name}</label>
      {list.child && (
        <ul>
          {list.child.map((ch) => (
            <CheckboxChild key={ch.id} updateCheckbox={updateCheckbox} list={ch} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CheckboxChild;
