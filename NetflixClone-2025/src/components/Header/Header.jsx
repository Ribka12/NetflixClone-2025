import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/image.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


function Header() {

  return (
    <>
      <div className="parentHeader">
        <div className="header-logo">
          <img src={logo} alt="NetflixLogo" title="Netflix Logo" />
        </div>

        <div className="header-menu">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="head-logos">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>

       
      </div>
    </>
  );
}

export default Header;
