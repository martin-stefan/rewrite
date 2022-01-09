import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav">

      <ul className="sidenav__links">
        <li className="sidenav__link">
          <Link to="/projects" >Projects</Link>
        </li>
        <li className="sidenav__link">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="sidenav__link">
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav;