import React from "react";
import EmpNavbar from "./EmpNavbar";

export default function EmployeeHome() {
  return (
    <>
      {/* Hero Section */}
      <EmpNavbar></EmpNavbar>
      <div className="bg-success text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="fw-bold display-5">
                Your Trusted Employee Management Solution
              </h1>
              <p className="lead mt-3">
                Simplifying HR operations, enhancing productivity, and empowering
                employees and managers with smart digital tools.
              </p>
              <div className="mt-4">
                <button className="btn btn-light btn-lg me-3 rounded-pill">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://via.placeholder.com/500x350"
                alt="EMS"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What We Offer</h2>
          <p className="text-muted">
            Everything you need to manage your workforce efficiently.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center">
              <div className="card-body">
                <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                <h5 className="fw-semibold">Employee Management</h5>
                <p className="text-muted">
                  Centralized employee data management with role-based access.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center">
              <div className="card-body">
                <i className="bi bi-calendar-check-fill fs-1 text-success mb-3"></i>
                <h5 className="fw-semibold">Attendance Tracking</h5>
                <p className="text-muted">
                  Accurate check-in, check-out, and attendance reports.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4 text-center">
              <div className="card-body">
                <i className="bi bi-journal-text fs-1 text-warning mb-3"></i>
                <h5 className="fw-semibold">Leave Management</h5>
                <p className="text-muted">
                  Easy leave requests and quick manager approvals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <i className="bi bi-speedometer2 fs-1 text-primary mb-3"></i>
                <h6 className="fw-semibold">Fast & Reliable</h6>
                <p className="text-muted">
                  Optimized for performance and scalability.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <i className="bi bi-shield-lock-fill fs-1 text-success mb-3"></i>
                <h6 className="fw-semibold">Secure System</h6>
                <p className="text-muted">
                  Enterprise-level security and role-based access.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <i className="bi bi-people fs-1 text-warning mb-3"></i>
                <h6 className="fw-semibold">User Friendly</h6>
                <p className="text-muted">
                  Simple UI for employees, managers, and HR teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="container my-5 text-center">
        <h2 className="fw-bold mb-3">Get Started Today</h2>
        <p className="text-muted mb-4">
          Transform the way you manage your workforce with our smart HR solution.
        </p>
        <button className="btn btn-primary btn-lg rounded-pill">
          Join Now
        </button>
      </div>
    </>
  );
}
