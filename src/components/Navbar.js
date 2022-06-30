import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
const location = useLocation();
  return (
    <div className="navbar">
      <div className={`navbar-container ${ location.pathname === "/" && "home" }`} >
        {location.pathname === "/results" && (
          <Link className="link" to={"/"}>
             Home
          </Link>           
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
