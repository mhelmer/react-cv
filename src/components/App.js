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

const data = {
  name: { first: 'John', last: 'Doe' },
  skillList: {
    scoreLimit: 5,
    skills: [
      { name: 'Pretty skilled', score: 2 },
      { name: 'Not so skilled', score: 1 },
      { name: 'Very skilled', score: 3 },
    ],
  },
}

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header name={data.name} />
        <About />
        <Skills skills={data.skillList.skills} scoreLimit={data.skillList.scoreLimit}/>
        <Experience />
        <Education />
      </Layout>
    )
  }
}
