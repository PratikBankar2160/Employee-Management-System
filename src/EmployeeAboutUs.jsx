import React from "react";
import EmpNavbar from "./EmpNavbar";

export default function EmployeeAboutUs() {
    return (
        <div><EmpNavbar></EmpNavbar>
            <div className="container my-5">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">About Us</h2>
                    <p className="text-muted">
                        Empowering organizations through smart employee management solutions.
                    </p>
                </div>

                {/* About Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img
                            src="https://via.placeholder.com/500x350"
                            alt="About us"
                            className="img-fluid rounded-4 shadow-sm"
                        />
                    </div>

                    <div className="col-md-6">
                        <h4 className="fw-semibold mb-3">Who We Are</h4>
                        <p className="text-muted">
                            We are a dedicated team focused on building reliable and scalable
                            Employee Management Systems that simplify HR operations and enhance
                            workforce productivity.
                        </p>
                        <p className="text-muted">
                            Our platform helps organizations manage employees, attendance,
                            leave requests, and reporting — all from a single, secure system.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 rounded-4">
                            <div className="card-body">
                                <h5 className="fw-bold mb-2">
                                    <i className="bi bi-bullseye text-primary me-2"></i>
                                    Our Mission
                                </h5>
                                <p className="text-muted mb-0">
                                    To provide simple, secure, and efficient HR solutions that help
                                    organizations focus on growth and people success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm border-0 rounded-4">
                            <div className="card-body">
                                <h5 className="fw-bold mb-2">
                                    <i className="bi bi-eye-fill text-success me-2"></i>
                                    Our Vision
                                </h5>
                                <p className="text-muted mb-0">
                                    To become a trusted digital partner for businesses by delivering
                                    innovative and user-friendly workforce management solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="text-center mb-4">
                    <h4 className="fw-bold">Why Choose Us?</h4>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100 text-center shadow-sm border-0 rounded-4">
                            <div className="card-body">
                                <i className="bi bi-speedometer2 fs-1 text-primary mb-3"></i>
                                <h6 className="fw-semibold">Fast & Efficient</h6>
                                <p className="text-muted">
                                    Optimized workflows that save time and reduce manual effort.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center shadow-sm border-0 rounded-4">
                            <div className="card-body">
                                <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
                                <h6 className="fw-semibold">Secure Platform</h6>
                                <p className="text-muted">
                                    Strong authentication and role-based access control.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100 text-center shadow-sm border-0 rounded-4">
                            <div className="card-body">
                                <i className="bi bi-people fs-1 text-warning mb-3"></i>
                                <h6 className="fw-semibold">User Friendly</h6>
                                <p className="text-muted">
                                    Clean UI designed for employees, managers, and HR teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
