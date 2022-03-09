import React from "react";
import { Link } from "react-router-dom";

import className from "./Navbar.module.css";

const links = [
  { id: 1, url: "/checkbox", name: "Checkbox" },
  { id: 2, url: "/timer", name: "Timer" },
  { id: 3, url: "/calender", name: "Calender" },
  { id: 4, url: "/hoc", name: "HOC" },
];

const Navbar = () => {
  return (
    <ul className={className.container}>
      {links.map(({ id, url, name }) => (
        <li key={id}>
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
