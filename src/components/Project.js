import React from "react";

const Project = ({ projectData }) => {
  return (
    <div>
      <h1>{projectData.name}</h1>
      <p>{projectData.description}</p>
      <div>{projectData.image}</div>
      <p>{projectData.techStack}</p>
    </div>
  );
};

export default Project;
