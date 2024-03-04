import React from "react";

const Skill = ({ name, skills }) => {
  return (
    <div className="skill">
      <h2>{name}</h2>
      <div>
        {skills.map((skill_name) => {
          return <p>{skill_name}</p>;
        })}
      </div>
    </div>
  );
};

export default Skill;
