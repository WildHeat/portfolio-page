import React from "react";

const Project = ({ projectData }) => {
  return (
    <div>
      <h3>{projectData.name}</h3>
      <p>{projectData.description}</p>
      <div>{projectData.image}</div>
      <p>{projectData.techStack}</p>
    </div>
  );
};

export default Project;
