import React, { Component } from "react";

//Stateless Functional Component sfc
const NavBar = ({ totalCounters, totalSum }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <span className="badge badge-pill badge-secondary">{totalSum}</span>
      </a>
    </nav>
  );
};

export default NavBar;
