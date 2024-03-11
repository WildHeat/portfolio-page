import React from "react";

const Project = ({ projectData }) => {
  return (
    <div className="project-container">
      <div className="project-content-container">
        <div className="project-text-container">
          <a href={projectData.url} target="_blank" rel="noreferrer">
            <h2 className="project-title">{projectData.name}</h2>
          </a>
          <br />
          {projectData.description.map((paragraph, key) => {
            return (
              <div key={key}>
                <p>{paragraph}</p>
                <br />
              </div>
            );
          })}
          <p>Key points</p>
          {projectData.keyPoints.map((point, key) => {
            return <p key={key}>- {point}</p>;
          })}
          <br />
          <p className="project-teck-stack">
            Tech stack:
            <br />
            {projectData.techStack.join(", ")}
          </p>
          <br />
          <div className="project-bottom-links">
            <a href={projectData.url} target="_blank" rel="noreferrer">
              <button className="project-btn">
                <h4>Live Site!</h4>
              </button>
            </a>
            <a href={projectData.github} target="_blank" rel="noreferrer">
              <button className="project-btn">
                <h4>GitHub</h4>
              </button>
            </a>
          </div>
        </div>
        <div
          className="project-image-container"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + projectData.image
            })`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Project;
