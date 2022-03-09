import React from "react";
import className from "./Checkbox.module.css";

const Checkbox = () => {

  const updateCheckbox = ({ target: el }) => {
    updateChild(el);
    updateParent(el);
  };

  const updateParent = (el) => {
    let parent = getParent(el);
    while (parent) {
      const children = getChildren(parent);
      if (children) {
        const checkedChildren = [...children].filter((ch) => ch.checked).length;
        parent.checked = checkedChildren === children.length;
        parent.indeterminate = !parent.checked && checkedChildren;
      }
      parent = getParent(parent);
    }
  };

  const updateChild = (el) => {
    const children = getChildren(el);
    children.forEach((ch) => {
      ch.checked = el.checked;
    });
  };

  const getParent = (el) => {
    const closestUl = el.closest("ul");
    const closestLi = closestUl.closest("li");
    return closestLi && closestLi.querySelector('input[type="checkbox"]');
  };

  const getChildren = (el) => {
    const closestLi = el.closest("li");
    const closestUl = closestLi.querySelector("ul");
    return (closestUl && closestUl.querySelectorAll('input[type="checkbox"]')) || [];
  };

  return (
    <>
      <h2>Nested Checkbox</h2>
      <ul>
        <li className={className.moveLeft}>
          <input onChange={updateCheckbox} type="checkbox" id="all" />
          <label htmlFor="all">All things</label>
          <ul>
            <li className={className.moveLeft}>
              <input onChange={updateCheckbox} type="checkbox" id="tall" />
              <label htmlFor="tall">Tall things</label>
              <ul>
                <li className={className.moveLeft}>
                  <input onChange={updateCheckbox} type="checkbox" id="building" />
                  <label htmlFor="building">Buildings</label>
                  <ul>
                    <li className={className.moveLeft}>
                      <input onChange={updateCheckbox} type="checkbox" id="building-1" />
                      <label htmlFor="building-1">Ghiza</label>
                    </li>
                    <li className={className.moveLeft}>
                      <input onChange={updateCheckbox} type="checkbox" id="building-2" />
                      <label htmlFor="building-2">Eiffel</label>
                    </li>
                  </ul>
                </li>
                <li className={className.moveLeft}>
                  <input onChange={updateCheckbox} type="checkbox" id="persons" />
                  <label htmlFor="persons">Persons</label>
                  <ul>
                    <li className={className.moveLeft}>
                      <input onChange={updateCheckbox} type="checkbox" id="persons-1" />
                      <label htmlFor="persons-1">Andre</label>
                    </li>
                    <li className={className.moveLeft}>
                      <input onChange={updateCheckbox} type="checkbox" id="persons-2" />
                      <label htmlFor="persons-2">Paul</label>
                    </li>
                  </ul>
                </li>
                <li className={className.moveLeft}>
                  <input onChange={updateCheckbox} type="checkbox" id="animals" />
                  <label htmlFor="animals">Dinosaur</label>
                </li>
              </ul>
            </li>
            <li className={className.moveLeft}>
              <input onChange={updateCheckbox} type="checkbox" id="short" />
              <label htmlFor="short">Short things</label>
              <ul>
                <li className={className.moveLeft}>
                  <input onChange={updateCheckbox} type="checkbox" id="short-1" />
                  <label htmlFor="short-1">Cat</label>
                </li>
                <li className={className.moveLeft}>
                  <input onChange={updateCheckbox} type="checkbox" id="short-2" />
                  <label htmlFor="short-2">Ant</label>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Checkbox;
