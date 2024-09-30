import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Notifications from "./components/Notifications";
import Help from "./components/Help";
import Logout from "./components/Logout";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import AboutUs from "./components/AboutUs";
import TransitionPage from "./components/TransitionPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route that redirects to /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Define all the other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/transition" element={<TransitionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
