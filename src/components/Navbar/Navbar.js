import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import className from "./Navbar.module.css";

const links = [
  { id: 1, url: "checkbox", name: "Checkbox" },
  { id: 2, url: "countdown", name: "Countdown" },
  { id: 3, url: "calender", name: "Calender" },
  { id: 18, url: "calculator", name: "Calculator" },
  { id: 4, url: "hoc", name: "HOC" },
  { id: 5, url: "modal", name: "Modal" },
  { id: 6, url: "colorspotter", name: "Color Spotter" },
  { id: 7, url: "clock", name: "Clock" },
  { id: 8, url: "timer", name: "Timer" },
  { id: 9, url: "star", name: "StarRating" },
  { id: 10, url: "queenmove", name: "QueenMove" },
  { id: 11, url: "memory", name: "MemoryGame" },
  { id: 12, url: "folder", name: "Folder" },
  { id: 13, url: "comments", name: "Comments" },
  { id: 14, url: "autocomplete", name: "Autocomplete" },
  { id: 15, url: "lazyload", name: "LazyLoadImage" },
  { id: 16, url: "infiniteload", name: "InfiniteLoad" },
  { id: 17, url: "formvalidation", name: "MultiForm" },
];
const Navbar = () => {
  const [containerClass, setContainerClass] = useState([className.container, ""]);
  const toggle = () => {
    const [first, second] = containerClass;
    if (second !== "") {
      setContainerClass([first, ""]);
    } else {
      setContainerClass([first, className.active]);
    }
  };
  return (
    <>
      <button className={className.toggleBtn} onClick={toggle}>
        Snippets
      </button>
      <ul className={containerClass.join(" ")}>
        {links.map(({ id, url, name }) => (
          <li className={className.links} key={id}>
            <NavLink className={({ isActive }) => (isActive ? className.activeLink : className.link)} onClick={toggle} to={url}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
