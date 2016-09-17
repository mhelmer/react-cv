import React, { Component } from 'react'
import '../../styles/skillbar.scss'

class SkillBar extends Component {
  componentWillMount() {
    this.setStyle = this.setStyle.bind(this)
    this.setState({ style: {} })
  }
  componentDidMount() {
    const { score, scoreLimit } = this.props
    setTimeout(() => this.setStyle(score, scoreLimit), 200)
  }
  componentWillReceiveProps(nextProps) {
    const { score, scoreLimit } = nextProps
    this.setStyle(score, scoreLimit)
  }
  setStyle(score, scoreLimit) {
      const style = {
        transform: `
          translateX(${parseInt(-100 * (1 - score/scoreLimit)/2)}%)
          scaleX(${score/scoreLimit})
        `,
        opacity: 1,
      }
      this.setState({ style })
    }
  render() {
    return (
      <div className="skillbar">
        <span
          className="skillbar-active"
          style={this.state.style}>
        </span>
      </div>
    )
  }
}

export default SkillBar
