import React from 'react'
import { Link } from 'react-router-dom'
import EmployeeAboutUs from './EmployeeAboutUs'

export default function EmpNavbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-warning fs-3" href="/">EmPower</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item"><Link to={"/Ehome"} className="nav-link active text-light fs-5" aria-current="page">Home</Link></li>
              <li className="nav-item"><Link to={"/Eabout_us"} className="nav-link text-light fs-5" aria-current="page">About us</Link></li>
              <li className="nav-item"><Link to={"/empContactUs"} className="nav-link text-light fs-5" aria-current="page">Contact us</Link></li>
              <li className="nav-item"><Link to={"/Eservices"} className="nav-link text-light fs-5" aria-current="page">Our service</Link></li>
              <li className="nav-item"><Link to={"/register"} className="nav-link text-light fs-5" aria-current="page">Register</Link></li>
              {/* About */}
              {/* Contact us */}
              {/* Our /servie */}

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success text-light fs-5" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

// seraching byfirstName,lastname
