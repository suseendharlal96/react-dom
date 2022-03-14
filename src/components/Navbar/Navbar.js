import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import className from "./Navbar.module.css";

const links = [
  { id: 1, url: "checkbox", name: "Checkbox" },
  { id: 2, url: "countdown", name: "Countdown" },
  { id: 3, url: "calender", name: "Calender" },
  { id: 4, url: "hoc", name: "HOC" },
  { id: 5, url: "modal", name: "Modal" },
  { id: 6, url: "colorspotter", name: "Color Spotter" },
  { id: 7, url: "clock", name: "Clock" },
  { id: 8, url: "timer", name: "Timer" },
];
const Navbar = () => {
  // const [a, a] = useState(d);
  return (
    <ul className={className.container}>
      {links.map(({ id, url, name }) => (
        <li className={className.links} key={id}>
          <NavLink className={({ isActive }) => (isActive ? className.activeLink : className.link)} to={url}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
