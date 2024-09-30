import React from "react";
import "./Contact.css";

const Contact = () => {
  const buildingAddress =
    "Atharva Sky Line, near Coforge Ltd, Ujalaiwadi, Kolhapur, second floor"; // Example address
  const gmail = "vishukhot@gmail.com";

  const goToMap = () => {
    // URL to Google Maps with the destination address
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      buildingAddress
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> {gmail}
        </p>
        <p>
          <strong>Address:</strong> {buildingAddress}
        </p>
      </div>

      <button className="map-button" onClick={goToMap}>
        Go to Map
      </button>
    </div>
  );
};

export default Contact;
