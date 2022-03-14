import React from "react";

import PropTypes from "prop-types";

import classNames from "./Checkbox.module.css";

const CheckboxChild = ({ list, updateCheckbox }) => {
  return (
    <li className={classNames.moveLeft}>
      <input onChange={updateCheckbox} type="checkbox" id={list.id} />
      <label htmlFor={list.id}>{list.name}</label>
      {list.children && (
        <ul>
          {list.children.map((ch) => (
            <CheckboxChild key={ch.id} updateCheckbox={updateCheckbox} list={ch} />
          ))}
        </ul>
      )}
    </li>
  );
};

CheckboxChild.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
  updateCheckbox: PropTypes.func.isRequired,
};

export default CheckboxChild;
