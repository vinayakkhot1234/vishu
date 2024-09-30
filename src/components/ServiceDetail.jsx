import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { id } = useParams();

  // Replace with your actual service data fetching logic
  const serviceData = {
    1: { name: "Service One", description: "Description for Service One" },
    2: { name: "Service Two", description: "Description for Service Two" },
    3: { name: "Service Three", description: "Description for Service Three" },
    4: { name: "Service Four", description: "Description for Service Four" },
    5: { name: "Service Five", description: "Description for Service Five" },
    6: { name: "Service Six", description: "Description for Service Six" },
    7: { name: "Service Seven", description: "Description for Service Seven" },
    8: { name: "Service Eight", description: "Description for Service Eight" },
    9: { name: "Service Nine", description: "Description for Service Nine" },
    10: { name: "Service Ten", description: "Description for Service Ten" },
  };

  const service = serviceData[id];

  return (
    <div className="service-detail-container">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
