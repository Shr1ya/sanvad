import React from "react";
import "./pages.css";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homePage">
      <div className="button">
        <Link
          style={{
            alignItems: "center",
            textAlign: "center",
            width: "80px",
            margin: "24px 8px",
            padding: "8px 16px",
            background: "var(--neutral6)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "inline-flex",
            flexDirection: "column",
            color: "var(--neutral1)",
            fontSize: "12px",
            fontWeight: "600",
          }}
          to="/conference-room"
        >
          <FaIcons.FaUsers style={{ fontSize: "48px", padding: "6px 2px" }} />
          Conference Booking
        </Link>

        <Link
          style={{
            alignItems: "center",
            textAlign: "center",
            width: "80px",
            margin: "24px 8px",
            padding: "8px 16px",
            background: "var(--neutral6)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "inline-flex",
            flexDirection: "column",
            color: "var(--neutral1)",
            fontSize: "12px",
            fontWeight: "600",
          }}
          to="/ticketing-system"
        >
          <IoIcons.IoIosPaper
            style={{ fontSize: "48px", padding: "6px 2px" }}
          />
          Ticketing System
        </Link>

        <Link
          style={{
            alignItems: "center",
            textAlign: "center",
            width: "80px",
            margin: "24px 8px",
            padding: "8px 16px",
            background: "var(--neutral6)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "inline-flex",
            flexDirection: "column",
            color: "var(--neutral1)",
            fontSize: "12px",
            fontWeight: "600",
          }}
          to="/visitor-management"
        >
          <FaIcons.FaIdBadge style={{ fontSize: "48px", padding: "6px 2px" }} />
          Visitor Management
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
