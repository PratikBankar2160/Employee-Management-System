import React from "react";
import EmpNavbar from "./EmpNavbar";

export default function EmployeeContactUs() {
    return (
        <div> <EmpNavbar></EmpNavbar>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4">
                            <div className="card-body p-4">

                                {/* Header */}
                                <h3 className="text-center fw-bold mb-2">Contact Us</h3>
                                <p className="text-center text-muted mb-4">
                                    We’d love to hear from you. Please fill out the form below.
                                </p>

                                {/* Form */}
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter subject"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Write your message..."
                                        ></textarea>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg rounded-pill">
                                            Send Message
                                        </button>
                                    </div>
                                </form>

                                {/* Footer Info */}
                                <div className="text-center mt-4 text-muted">
                                    <p className="mb-1">
                                        <i className="bi bi-envelope-fill me-2"></i>
                                        support@ems.com
                                    </p>
                                    <p className="mb-0">
                                        <i className="bi bi-telephone-fill me-2"></i>
                                        +91 98765 43210
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
