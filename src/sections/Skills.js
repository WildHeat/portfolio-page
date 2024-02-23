import React from "react";
import Skill from "../components/Skill";
import skillData from "../data/SKILLS_DATA.json";

const Skills = () => {
  return (
    <div className="skills-container">
      {skillData.map((skill, index) => {
        return <Skill key={index} name={skill.name} />;
      })}
    </div>
  );
};

export default Skills;
