import { skills } from "../../utils/constants";
import React from "react";
import AnimatedSection from "../Animations/AnimatedSection";

const Skills = () => {
  return (
    <AnimatedSection className='skill'>
      <h3 className='h3 skills-title'>Non-Technical skills</h3>

      <ul className='skills-list content-card'>
        {skills.map(({ skill, progress }) => {
          return (
            <li className='skills-item'>
              <div className='title-wrapper'>
                <h5 className='h5'>{skill}</h5>
              </div>

              <div className='skill-progress-bg'>
                <div
                  className='skill-progress-fill'
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </AnimatedSection>
  );
};
export default Skills;
