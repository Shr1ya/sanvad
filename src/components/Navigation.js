import React from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import VisitorManagement from "./pages/VisitorManagement";
import TicketingRequester from "./pages/TicketingSystem-Req";
import CapEx from "./pages/CapEx";
import Resources from "./pages/Resources";
import SideBar from "./SideBar";
import Events from "./pages/Events";
import ConferenceRoom from "./pages/ConferenceBooking";
import ManageEmployee from "./Manage Employee/ManageEmployee";

function Navigation() {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/ticketing-system" element={<TicketingRequester />} />
            <Route path="/conference-room" element={<ConferenceRoom />} />
            <Route path="/visitor-management" element={<VisitorManagement />} />
            <Route path="/capex" element={<CapEx />} />
            <Route path="/manage-employee" element={<ManageEmployee />} />
            <Route path="/manage-employee" element={<ManageEmployee />} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
}

export default Navigation;
