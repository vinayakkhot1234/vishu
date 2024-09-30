import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Save user data in localStorage to simulate registration
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("isRegistered", true); // Set flag that user has registered
    navigate("/login"); // Redirect to login page after registration
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="register-box">
        <form onSubmit={handleRegister}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
