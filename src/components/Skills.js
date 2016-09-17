import React from 'react';

const SkillDot = ({ score, scoreLimit }) => (
  <div className="skilldots">
    { Array(scoreLimit).fill().map((_, idx) => (
      idx < score ? (
        <span key={idx} className="skilldot skilldot-active"></span> 
      ) : (
        <span key={idx} className="skilldot skilldot-inactive"></span>
      )
    ) ) }
  </div>
)

const Skills = ({ skills, scoreLimit }) => (
  <section>
    <ul>
    { skills.sort((a, b) => a.score - b.score).map(skill => (
      <li key={skill.name} className="skills">
        {skill.name}:
        <SkillDot score={skill.score} scoreLimit={scoreLimit} />
      </li>
    ) ) }
    </ul>
  </section>
)

export default Skills
