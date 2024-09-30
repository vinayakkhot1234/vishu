import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editing, setEditing] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  // Fetch stored credentials and profile picture from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedProfilePic = localStorage.getItem("profilePic");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }

    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    } else {
      setProfilePic("/assets/default-profile.jpg"); // Use default image if no profile pic
    }
  }, []);

  // Handle form submission for updating email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setEditing(false);
    alert("Profile updated successfully");
  };

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result); // Set the uploaded image as profile pic
        localStorage.setItem("profilePic", reader.result); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  // Render form for editing profile
  const renderEditForm = () => (
    <form className="profile-edit-form" onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Update Profile Picture:</label>
        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <img src={profilePic} alt="Profile" className="profile-photo" />
        <div className="profile-details">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Password:</strong> {password.replace(/./g, "*")}
          </p>
        </div>
      </div>

      {editing ? (
        renderEditForm()
      ) : (
        <div>
          <button className="edit-btn" onClick={() => setEditing(true)}>
            <img
              src="/assets/update-profile-icon.png"
              alt="Update Profile"
              className="update-profile-icon"
            />
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
