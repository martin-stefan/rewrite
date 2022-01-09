import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav">
      <Link to="/projects" >Projects</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/">Contact</Link>
    </div>
  )
}

export default SideNav;