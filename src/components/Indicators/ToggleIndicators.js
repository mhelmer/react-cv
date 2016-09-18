import React, { Component } from 'react'
import SkillBar from './SkillBar'
import SkillDots from './SkillDots'
import '../../styles/toggle-indicators.scss'

class ToggleIndicators extends Component {
  constructor() {
    super()
    this.state = { indicator: 'skillbar' }
    this.toggleIndicator = this.toggleIndicator.bind(this)
  }
  toggleIndicator() {
    this.setState({
      indicator: this.state.indicator === 'skillbar' ? 'skilldots' : 'skillbar'
    })
  }
  render() {
    return (
      <div className="skill-toggle" onClick={this.toggleIndicator}>
        { this.state.indicator === 'skillbar' ? (
          <SkillBar {...this.props} />
        ) : (
          <SkillDots {...this.props} />
        ) }
      </div>
    )
  }
}

export default ToggleIndicators
