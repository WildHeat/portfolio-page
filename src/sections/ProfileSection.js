import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-image-container"></div>
        <div className="profile-summary-container">
          <h2 className="summary-title">
            Hey, I'm <span className="summary-title-aron">Aron.</span>
          </h2>
          <h2 className="summary-title">I'm a Full Stack Developer.</h2>
          {/* <p className="summary-text">
            Born in Germany and raised in England. Studied Computer Science at
            the University of Surrey. Addicted to art, bouldering and computers.
          </p> */}
          <div className="summary-button-container">
            <button className="btn-explore btn">Explore My Work</button>
            <button className="btn-skills btn">Skills</button>
          </div>
        </div>
      </div>
      {/* <div className="background-shape"></div> */}
    </div>
  );
};

export default Profile;
