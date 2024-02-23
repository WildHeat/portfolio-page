import React from "react";
import projectsData from "../data/PROJECTS_DATA.json";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="project-section-container">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectsData.map((project) => {
          return <Project projectData={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
