import React, { PropTypes } from 'react'
import { ToggleIndicators } from './Indicators'
import '../styles/skills.scss'

const skillPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
})

const Skill = ({ skill, scoreLimit }) => (
  <div>
    {skill.name}: <ToggleIndicators score={skill.score} scoreLimit={scoreLimit} />
  </div>
)
Skill.propTypes = {
  skill : skillPropType.isRequired,
  scoreLimit: PropTypes.number.isRequired,
}

const Skills = ({ skills, scoreLimit }) => (
  <section className="skills-section">
    <h1>Skills</h1>
    <ul>
    { skills.sort((a, b) => a.score - b.score).map(skill => (
      <li key={skill.name} className="skills">
        <Skill skill={skill} scoreLimit={scoreLimit} />
      </li>
    ) ) }
    </ul>
  </section>
)
Skills.propTypes = {
  skills: PropTypes.arrayOf(skillPropType).isRequired,
  scoreLimit: PropTypes.number.isRequired,
}

export default Skills
