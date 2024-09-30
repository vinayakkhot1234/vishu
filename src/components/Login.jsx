import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is registered, if not, redirect to the register page
    const isRegistered = localStorage.getItem("isRegistered");
    if (!isRegistered) {
      navigate("/register");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if the credentials match
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", true); // Set logged-in flag
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } else {
      alert("Invalid credentials, please register first!");
      navigate("/register"); // Redirect to register if credentials are invalid
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>
        <p className="register-link">
          Not yet registered?{" "}
          <span onClick={() => navigate("/register")}>Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
