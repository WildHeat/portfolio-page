import React from "react";

const Project = ({ projectData }) => {
  return (
    <div className="project-container">
      <div className="project-content-container">
        <div className="project-text-container">
          <a href={projectData.url} target="_blank" rel="noreferrer">
            <h2 className="project-title">{projectData.name}</h2>
          </a>
          <p>{projectData.description}</p>
          <p>Key points</p>
          {projectData.keyPoints.map((point) => {
            return <p>- {point}</p>;
          })}
          <br />
          <p className="project-teck-stack">
            Tech stack:
            <br />
            {projectData.techStack.join(", ")}
          </p>
        </div>
        <div className="project-image-container">{projectData.image}</div>
      </div>
    </div>
  );
};

export default Project;
