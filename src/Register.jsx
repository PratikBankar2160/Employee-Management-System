import React, { useState } from "react";
import "./Register.css";
import EmployeeDashboard from "./EmployeeDashboard";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Registered Successfully 🚀");
  };

  return (
    <div>
      {/* <EmployeeDashboard></EmployeeDashboard> */}
    
    <div className="auth-bg">
      <div className={`auth-card ${error ? "shake" : ""}`}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group mb-3">
            <input
              type="text"
              name="username"
              className="form-control custom-input"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control custom-input"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group mb-3">
            <input
              type="password"
              name="confirmPassword"
              className="form-control custom-input"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            {error && <small className="text-danger">{error}</small>}
          </div>

          <button className="btn btn-primary w-100 animated-btn">
            Register
          </button>
        </form>

        <p className="text-center mt-3 text-muted">
          Already have an account? <span className="link">Login</span>
        </p>
      </div>
    </div>
    </div>
  );
}
