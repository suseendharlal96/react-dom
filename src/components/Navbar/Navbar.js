import React from "react";
import { Link } from "react-router-dom";

import className from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={className.container}>
      <li>
        <Link to="/checkbox">Checkbox</Link>
      </li>
    </ul>
  );
};

export default Navbar;
