import React from "react";
import Search from "./Search";
import "./Header.css";
import rickandmortylogo from "../assets/rickandmortylogo.png";

const Header = () => {
  return (
    <div className="header">
     <img className="logo" src={rickandmortylogo} alt={rickandmortylogo} />
      <Search />
    </div>
  )
}

export default Header;