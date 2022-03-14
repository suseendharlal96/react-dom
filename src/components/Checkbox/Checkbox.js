import React from "react";

import CheckboxChild from "./CheckboxChild";

const checkBoxObj = [
  {
    name: "All things",
    id: "all",
    children: [
      {
        name: "Tall things",
        id: "tall",
        children: [
          {
            name: "Buildings",
            id: "building",
            children: [
              { name: "Ghiza", id: "building-1" },
              { name: "Eiffel", id: "building-2" },
            ],
          },
          {
            name: "Persons",
            id: "persons",
            children: [
              { name: "Andre", id: "persons-1" },
              { name: "Paul", id: "persons-2" },
            ],
          },
          {
            name: "Dinosaur",
            id: "animals",
          },
        ],
      },
      {
        name: "Short things",
        id: "short",
        children: [
          { name: "Cat", id: "short-1" },
          { name: "Ant", id: "short-2" },
        ],
      },
    ],
  },
];

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
        {checkBoxObj.map((o) => (
          <CheckboxChild key={o.id} list={o} updateCheckbox={updateCheckbox} />
        ))}
      </ul>
    </>
  );
};

export default Checkbox;
