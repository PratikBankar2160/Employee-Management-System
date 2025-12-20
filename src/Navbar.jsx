import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

export default function Navbar() {
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

              <li className="nav-item"><Link to={"/home"} className="nav-link active text-light fs-5" aria-current="page">Home</Link></li>
              <li className="nav-item"><Link to={"/add"} className="nav-link text-light fs-5" aria-current="page">Add Employee</Link></li>
              <li className="nav-item"><Link to={"/all"} className="nav-link text-light fs-5" aria-current="page">All Employee</Link></li>
              <li className="nav-item"><Link to={"/about_us"} className="nav-link text-light fs-5" aria-current="page">About us</Link></li>
              <li className="nav-item"><Link to={"/Contact_us"} className="nav-link text-light fs-5" aria-current="page">Contact us</Link></li>
              <li className="nav-item"><Link to={"/services"} className="nav-link text-light fs-5" aria-current="page">Our service</Link></li>
              
              <li className="nav-item"><Link to={"/search"} className="nav-link text-light fs-5" aria-current="page">Search Employee</Link></li>
              <li className="nav-item"><Link to={"/employeeLeaves"} className="nav-link text-light fs-5" aria-current="page">Employee leaves</Link></li>

            </ul>
            <form className="d-flex">
              <Logout></Logout>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
