import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "./Logout";
import "./EmpNavbar.css";


export default function EmpNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">

        {/* Brand */}
        <NavLink to="/" className="navbar-brand fw-bold fs-3 text-warning">
          EmPower
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">

            <li className="nav-item">
              <NavLink to="/Ehome" className="nav-link fs-5">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Eabout_us" className="nav-link fs-5">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/empContactUs" className="nav-link fs-5">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Eservices" className="nav-link fs-5">
                Our Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/leave" className="nav-link fs-5">
                Apply Leave
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/seeLeave" className="nav-link fs-5">
                My Leaves
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/employeeDashboard" className="nav-link fs-5">
                My Dashboard
              </NavLink>
            </li>
          </ul>

          {/* Logout */}
          <form className="d-flex">
            <Logout></Logout>
          </form>
        </div>
      </div>
    </nav>
  );
}
