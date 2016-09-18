import React, { Component } from 'react';
import '../../styles/skilldots.scss'

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
      this.timeout = setTimeout(this.tick, 50);
    }
  }
  componentDidMount() {
    this.timeout = setTimeout(this.tick, 50);
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
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

export default SkillDots
