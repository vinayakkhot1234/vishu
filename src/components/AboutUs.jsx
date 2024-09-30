import React from "react";
import "./AboutUs.css";
import founderImage from "../assets/founder-image.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="company-details">
        <h3>Our Company</h3>
        <p>
          Welcome to our company! We are committed to delivering high-quality
          products and services to our customers. Our mission is to provide
          innovative solutions that improve the lives of our clients and
          contribute to the community.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Teamwork</li>
        </ul>
      </div>
      <div className="founder-details">
        <h3>Meet Our Founder</h3>
        <div className="founder-details">
          <h3>Meet Our Founder</h3>
          <img src={founderImage} alt="Founder" className="founder-image" />
        </div>
        <p>
          Our founder, Pandurang Khot, started this company with a vision to
          create a positive impact in the industry. With years of experience and
          a passion for excellence, he leads our team to success.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
