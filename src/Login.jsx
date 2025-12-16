import React, { useState } from "react";
import "./Login.css";
import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    alert("Login clicked");
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
       
        <p className="project-info">
          <h1>Empower</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          is built to support employees at every stage of their journey.
          It enables managers and HR teams to streamline operations with ease.
          From attendance to performance tracking, everything stays organized.
          Employees stay informed, engaged, and productive.
          Managers gain clarity, control, and smarter decision-making.
        </p>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="login-card">
          <h2>
            <FaLock /> Log-in
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="input-group">
              <FaEnvelope className="icon email" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <FaLock className="icon password" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn-login">
              <FaSignInAlt /> LOGIN
            </button>

            <button type="button" className="btn-back">
              BACK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
