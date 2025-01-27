import React, { useState } from "react";
import "../styles/AuthForm.css";

const AuthPage = ({ onAuthSuccess }) => {
  const [signUpData, setSignUpData] = useState({
    fullName: "", email: "", password: "", contactNumber: "", profileImage: null
  });
  const [signInData, setSignInData] = useState({ username: "", password: "", profileImage: null });

  const handleChange = (setData) => (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event, setData) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setData(prev => ({ ...prev, profileImage: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event, formData, callback) => {
    event.preventDefault();
    if (onAuthSuccess) onAuthSuccess(formData.profileImage);
    // window.history.back();
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Sign Up Section */}
        <div className="auth-section sign-up-section">
          <h2>Sign Up</h2>
          <form onSubmit={(e) => handleSubmit(e, signUpData, onAuthSuccess)}>
            {/* Profile Image Upload */}
            <div className="profile-upload">
              <label htmlFor="signUpProfileImageInput">
                {signUpData.profileImage ? (
                  <img src={signUpData.profileImage} alt="Profile" className="uploaded-image" />
                ) : (
                  <span>Upload Profile Image</span>
                )}
              </label>
              <input
                id="signUpProfileImageInput"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setSignUpData)}
                style={{ display: "none" }}
              />
            </div>

            {/* Other form fields */}
            <input type="text" name="fullName" placeholder="Full Name" value={signUpData.fullName} onChange={handleChange(setSignUpData)} required />
            <input type="email" name="email" placeholder="Email ID" value={signUpData.email} onChange={handleChange(setSignUpData)} required />
            <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleChange(setSignUpData)} required />
            <input type="tel" name="contactNumber" placeholder="Contact Number" value={signUpData.contactNumber} onChange={handleChange(setSignUpData)} required />
            <button type="submit" className="action-btn">Register</button>
          </form>
        </div>

        {/* Sign In Section */}
        <div className="auth-section sign-in-section">
          <h2>Sign In</h2>
          <form onSubmit={(e) => handleSubmit(e, signInData, onAuthSuccess)}>
            {/* Profile Image Upload */}
            <div className="profile-upload">
              <label htmlFor="signInProfileImageInput">
                {signInData.profileImage ? (
                  <img src={signInData.profileImage} alt="Profile" className="uploaded-image" />
                ) : (
                  <span>Upload Profile Image</span>
                )}
              </label>
              <input
                id="signInProfileImageInput"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setSignInData)}
                style={{ display: "none" }}
              />
            </div>

            {/* Other form fields */}
            <input type="text" name="username" placeholder="Username" value={signInData.username} onChange={handleChange(setSignInData)} required />
            <input type="password" name="password" placeholder="Password" value={signInData.password} onChange={handleChange(setSignInData)} required />
            <button type="submit" className="action-btn">Login</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
