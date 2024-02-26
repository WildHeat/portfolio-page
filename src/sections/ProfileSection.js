import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-image-container"></div>
        <div className="profile-summary-container">
          <h1 className="summary-title">Full Stack Developer</h1>
          <p className="summary-text">
            Born in Germany and raised in England. Studied Computer Science at
            the University of Surrey. Addicted to art, bouldering and computers.
          </p>
          <div className="summary-button-container">
            <button className="btn-explore btn">Explore My Work</button>
            <button className="btn-skills btn">Skills</button>
          </div>
        </div>
      </div>
      <div className="background-shape"></div>
    </div>
  );
};

export default Profile;
