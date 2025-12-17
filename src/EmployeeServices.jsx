import React from "react";
import EmpNavbar from "./EmpNavbar";

export default function EmployeeServices() {
    return (
        <div><EmpNavbar></EmpNavbar>
            <div className="container my-5">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Our Services</h2>
                    <p className="text-muted">
                        Powerful solutions designed to simplify HR and employee management.
                    </p>
                </div>

                {/* Services */}
                <div className="row g-4">

                    {/* Service 1 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3">
                            <div className="card-body">
                                <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                                <h5 className="card-title fw-semibold">Employee Management</h5>
                                <p className="card-text text-muted">
                                    Manage employee records, roles, departments, and profiles with ease.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3">
                            <div className="card-body">
                                <i className="bi bi-calendar-check-fill fs-1 text-success mb-3"></i>
                                <h5 className="card-title fw-semibold">Attendance Tracking</h5>
                                <p className="card-text text-muted">
                                    Real-time attendance marking, check-in, check-out, and reports.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3">
                            <div className="card-body">
                                <i className="bi bi-journal-text fs-1 text-warning mb-3"></i>
                                <h5 className="card-title fw-semibold">Leave Management</h5>
                                <p className="card-text text-muted">
                                    Employees can request leaves and managers can approve or reject them.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3">
                            <div className="card-body">
                                <i className="bi bi-bar-chart-fill fs-1 text-info mb-3"></i>
                                <h5 className="card-title fw-semibold">Reports & Analytics</h5>
                                <p className="card-text text-muted">
                                    Generate detailed reports on attendance, leaves, and workforce trends.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3">
                            <div className="card-body">
                                <i className="bi bi-shield-lock-fill fs-1 text-danger mb-3"></i>
                                <h5 className="card-title fw-semibold">Secure Access</h5>
                                <p className="card-text text-muted">
                                    Role-based authentication for HR, managers, and employees.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 rounded-4 text-center p-3">
                            <div className="card-body">
                                <i className="bi bi-envelope-fill fs-1 text-secondary mb-3"></i>
                                <h5 className="card-title fw-semibold">Notifications & Alerts</h5>
                                <p className="card-text text-muted">
                                    Email and system notifications for approvals, updates, and reminders.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
