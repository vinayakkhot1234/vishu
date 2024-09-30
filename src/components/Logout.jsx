import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage or any other data related to the session
    localStorage.clear();
    navigate("/login");
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
