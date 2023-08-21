import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <ul className="nav-tags">
      <li className="navLi">
        <Link className="tags" to="/home">
          Home
        </Link>
      </li>
      <li className="navLi">
        <Link className="tags" to="/about">
          About
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
