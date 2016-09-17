import React, { Component } from 'react'
import Layout from './Layout'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const skillList = {
  scoreLimit: 5,
  skills: [
    { name: 'Skill1', score: 1 },
    { name: 'Skill2', score: 2 },
    { name: 'Skill3', score: 3 },
  ],
}

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <About />
        <Skills skills={skillList.skills} scoreLimit={skillList.scoreLimit}/>
        <Experience />
        <Education />
      </Layout>
    )
  }
}
