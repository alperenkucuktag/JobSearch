import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <img height={50} src='jobsearch.png' alt='' />
        <span>İş Takip</span>
      </h2>
      <nav>
        <NavLink to={"/"}>İş listesi</NavLink>
        <NavLink to={"/Add-job"}>İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
