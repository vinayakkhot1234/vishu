import React from "react";
import "./Help.css";

const Help = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:founder@example.com"; // Replace with the founder's email address
  };

  return (
    <div className="help-container">
      <h2>Help & Support</h2>
      <div className="help-details">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us:
        </p>
        <p>
          Email:
          <span className="contact-email" onClick={handleEmailClick}>
            founder@example.com
          </span>
        </p>
        <p>For further inquiries, please check our FAQ section.</p>
      </div>
    </div>
  );
};

export default Help;
