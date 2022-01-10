import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav">
      <Link to="/projects" className="sidenav__link">Projects</Link>
      <Link to="/courses" className="sidenav__link">Courses</Link>
      <Link to="/" className="sidenav__link">Contact</Link>
    </div>
  )
}

export default SideNav;