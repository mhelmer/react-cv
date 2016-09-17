import React, { Component } from 'react';
import '../styles/skilldots.scss'

class SkillDots extends Component {
  constructor () {
    super()
    this.tick = this.tick.bind(this)
    this.state = { value: 0 }
  }
  tick() {
    if (this.state.value < this.props.score ) {
      this.setState({ value: this.state.value + 1})
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.score !== this.props.score) {
      this.setState({ value: 0 })
    }
  }
  componentDidUpdate() {
    if (this.state.value < this.props.score ) {
      setTimeout(this.tick, 50);
    }
  }
  componentDidMount() {
    setTimeout(this.tick, 50);
  }
  render () {
    const { score, scoreLimit } = this.props
    return (
      <div className="skilldots">
        { Array(scoreLimit).fill().map((_, idx) => (
          idx < this.state.value ? (
            <span key={idx} className="skilldot skilldot-active"></span>
          ) : (
            <span key={idx} className="skilldot skilldot-inactive"></span>
          )
        ) ) }
      </div>
    )
  }
}

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
