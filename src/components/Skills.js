import React from 'react';
import { SkillDots } from './Indicators'

const Skills = ({ skills, scoreLimit }) => (
  <section className="skills-section">
    <h1>Skills</h1>
    <ul>
    { skills.sort((a, b) => a.score - b.score).map(skill => (
      <li key={skill.name} className="skills">
        {skill.name}:
        <SkillDots score={skill.score} scoreLimit={scoreLimit} />
      </li>
    ) ) }
    </ul>
  </section>
)

export default Skills
