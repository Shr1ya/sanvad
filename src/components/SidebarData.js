import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
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
    path: "/employee-list",
    icon: <FaIcons.FaUserCog />,
  },

  {
    title: "Manage Employee",
    path: "/manage-employee",
    icon: <FaIcons.FaUserCog />,
  },

  // {
  //   title: "Static Links",
  //   path: "/static-links",
  //   icon: <AiIcons.AiOutlineLink />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Ascent ESS : Employee Self Service Portal",
  //       path: "/static-links/ascentESS",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //     {
  //       title: "COPS Application URL",
  //       path: "/static-links/cops",
  //       icon: <IoIcons.IoIosPaper />,
  //     },
  //   ],
  // },
  // {
  //   title: "Manage Workflow",
  //   path: "/manage-workflow",
  //   icon: <FaIcons.FaNetworkWired />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: "Capex Workflow",
  //       path: "/manage-workflow/capex-workflow",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "Ticket Workflow",
  //       path: "/manage-workflow/ticket-workflow",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     }
  //   ],
  // },
];
