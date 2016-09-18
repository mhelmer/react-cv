import React, { Component } from 'react'
import Layout from './Layout'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Footer from './Footer'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const data = {
  contact: { 
    name: { first: 'John', last: 'Doe' },
    email: 'john.doe@example.com',
    address: {
      street1: 'Some street 23',
      street2: '2nd row',
      postCode: '11442',
      city: 'City',
    },
    phoneNumber: '+12 345 678 9',
    mobileNumber: '+12 987 654 3',
    social: [
      { siteName: 'github', username: 'github' },
      { siteName: 'linkedin', username: 'example' }
    ],
  },
  skillList: {
    scoreLimit: 5,
    skills: [
      { name: 'Pretty skilled', score: 3 },
      { name: 'Not so skilled', score: 1 },
      { name: 'Very skilled', score: 4 },
    ],
  },
  experience: [
    {
      title: 'My current Job',
      company: 'Company 1',
      time: '2016 - ',
      description: 'Doing hard work',
      tasks: ['some task', 'other task'],
    },
    {
      title: 'My last Job',
      company: 'Company 2',
      time: '2013 - 2016',
      description: 'Doing good work',
      tasks: ['some task', 'that task'],
    },
    {
      title: 'My first Job',
      company: 'Company 3',
      time: '2011 - 2013',
      description: 'Doing initial work',
      tasks: ['good task', 'another task'],
    }
  ]
}

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header name={data.contact.name} />
        <About />
        <Skills skills={data.skillList.skills} scoreLimit={data.skillList.scoreLimit}/>
        <Experience experience={data.experience} />
        <Education />
        <Footer contact={data.contact} />
      </Layout>
    )
  }
}
