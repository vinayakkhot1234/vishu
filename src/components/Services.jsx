import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { id: 1, name: "Service One" },
    { id: 2, name: "Service Two" },
    { id: 3, name: "Service Three" },
    { id: 4, name: "Service Four" },
    { id: 5, name: "Service Five" },
    { id: 6, name: "Service Six" },
    { id: 7, name: "Service Seven" },
    { id: 8, name: "Service Eight" },
    { id: 9, name: "Service Nine" },
    { id: 10, name: "Service Ten" },
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-box">
        <ul className="services-list">
          {services.map((service) => (
            <li
              key={service.id}
              className="service-item"
              onClick={() => navigate(`/service/${service.id}`)}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
