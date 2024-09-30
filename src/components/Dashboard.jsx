import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/menu-icon.svg";
import downloadableImage from "../assets/downloadable-image.png";
import downloadableVideo from "../assets/downloadable-video.mp4";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setShowMenu(false); // Close the menu after selecting
    navigate(path);
  };

  useEffect(() => {
    // Check if the user is logged in, if not, redirect to login page
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-left">
          <a href="/dashboard">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-right">
          <img
            src={menuIcon}
            alt="menu"
            className="menu-image"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && (
            <div className="dropdown-menu">
              <div onClick={() => handleNavigate("/profile")}>Profile</div>
              <div onClick={() => handleNavigate("/settings")}>Settings</div>
              <div onClick={() => handleNavigate("/notifications")}>
                Notifications
              </div>
              <div onClick={() => handleNavigate("/help")}>Help</div>
              <div onClick={() => handleNavigate("/logout")}>Logout</div>
            </div>
          )}
        </div>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome to the Dashboard</h1>

        <div className="download-section">
          <h3>Downloadable Image</h3>
          <a href={downloadableImage} download="my-image.png">
            {" "}
            {/* Downloadable image link */}
            <img
              src={downloadableImage}
              alt="Downloadable"
              className="download-image"
            />
          </a>
        </div>
      </div>
      {/* Video section */}
      <div className="video-section">
        <h3>Downloadable Video</h3>

        {/* Display the video */}
        <video controls className="dashboard-video">
          <source src={downloadableVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Download link */}
        <a
          href={downloadableVideo}
          download="my-video.mp4"
          className="download-button"
        >
          Download Video
        </a>
      </div>

      <div className="dashboard">
        <h4>To Know more about us click bellow</h4>
        <p>
          Click{" "}
          <Link to="/transition" style={{ color: "blue", cursor: "pointer" }}>
            here
          </Link>{" "}
          to go to the Transition Page.
        </p>
        {/* Other dashboard content */}
      </div>
    </div>
  );
};

export default Dashboard;
