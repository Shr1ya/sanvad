import React from "react";
// import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import "./Menu.css";

const Navbar = () => {
  return (
    <>
      <div className="topNavigation">
        <div className="logo">
          <a href="/">
            <img
              className="adorLogo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/Ador_Welding_logo.png"
              alt="logo"
            />
          </a>
          <hr />
          <h1>SANVAD</h1>
        </div>
        <div className="menuList">
          <ul>
            <li className="links">
              <a href="/">Home</a>
            </li>

            {/* <li className="input">
              <input type="search" placeholder="Search.." />
              <button type="submit" aria-label="Search">
                <BiIcons.BiSearch />
              </button>
            </li> */}

            <li className="icons" alt="notification">
              <IoIcons.IoIosNotifications />
            </li>
            <li className="icons" alt="profile">
              <FaIcons.FaUserCircle />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
