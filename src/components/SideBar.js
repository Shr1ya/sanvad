import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      title: "Homepage",
      path: "/",
      icon: <AiIcons.AiFillHome />,
    },

    {
      title: "Resources",
      path: "/resources",
      icon: <IoIcons.IoIosDocument />,
    },

    {
      title: "Events",
      path: "/events",
      icon: <FaIcons.FaBell />,
    },

    {
      title: "Ticketing System",
      path: "/ticketing-system",
      icon: <IoIcons.IoIosPaper />,
    },

    {
      title: "ConferenceRoom",
      path: "/conference-room",
      icon: <FaIcons.FaUsers />,
    },

    {
      title: "Visitor Management",
      path: "/visitor-management",
      icon: <FaIcons.FaIdBadge />,
    },

    {
      title: "Capex",
      path: "/capex",
      icon: <TbIcons.TbReportMoney />,
    },

    {
      title: "Manage Employee",
      path: "/manage-employee",
      icon: <FaIcons.FaUserCog />,
    },
  ];

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebarx">
          <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
            <div className="top_section">
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className="logo"
              >
                {" "}
              </h1>
              <div
                style={{ marginLeft: isOpen ? "200px" : "0px" }}
                className="bars"
              >
                <FaIcons.FaBars onClick={toggle} />
              </div>
            </div>
            {menuItem.map((item, index) => (
              <NavLink
                onClick={() => {
                  if (item.path === "/") {
                    return setIsOpen(true);
                  }
                  return setIsOpen(false);
                }}
                to={item.path}
                key={index}
                className="link"
                activeclassname="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
