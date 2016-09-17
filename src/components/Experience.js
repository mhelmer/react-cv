import React from 'react';

const Tasks = ({ tasks }) => (
  <ul className="job-tasks">
    { tasks.map(task => (
    <li key={task} className="job-task">{task}</li>
    ) ) }
  </ul>
)

const JobTime = ({ time }) => <div className="job-time">{time}</div>
const JobPosition = ({ title, company }) => (
  <div className="job-position">{title} at {company}</div>
)
const JobDescription = ({ description }) => (
  <div className="job-description">{description}</div>
)

const Job = ({ job }) => (
  <li className="job">
    <JobTime time={job.time} />
    <JobPosition title={job.title} company={job.company} />
    <JobDescription description={job.description} />
    <Tasks tasks={job.tasks} />
  </li>
)

const JobList = ({ jobs }) => (
  <ul>
    { jobs.map(job => (
    <Job key={job.title} job={job} />
    ) ) }
  </ul>
)

const Experience = ({ experience }) => (
  <section className="experience-section">
    <h1>Experience</h1>
    <JobList jobs={experience} />
  </section>
)

export default Experience
