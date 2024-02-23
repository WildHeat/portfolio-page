import React from "react";

const Project = ({ projectData }) => {
  return (
    <div className="project-container">
      <h3>{projectData.name}</h3>
      <div className="project-content-container">
        <div className="project-text-container">
          <p>{projectData.description}</p>
          <br />
          <p>{projectData.techStack.join(", ")}</p>
        </div>
        <div className="project-image-container">{projectData.image}</div>
      </div>
    </div>
  );
};

export default Project;
