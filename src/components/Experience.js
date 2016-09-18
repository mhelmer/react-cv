import React from 'react';
import '../styles/experience.scss'

const Tasks = ({ tasks }) => (
  <ul className="job-tasks">
    { tasks.map(task => (
    <li key={task} className="job-task">{task}</li>
    ) ) }
  </ul>
)

const JobTime = ({ time }) => (
  <div className="job-time">
    {time}
  </div>
)
const JobPosition = ({ title, company }) => (
  <div className="job-position">
    <div className="job-title">
      {title}
    </div>
    <div className="job-company">
      {company}
    </div>
  </div>
)
const JobDescription = ({ description }) => (
  <span className="job-description">{description}</span>
)
const JobDetails = ({ description, tasks }) => (
  <details className="job-details" open>
    <summary>
      <JobDescription description={description} />
    </summary>
    <Tasks tasks={tasks} />
  </details>
)

const Job = ({ job }) => (
  <li className="job">
    <JobTime time={job.time} />
    <JobPosition title={job.title} company={job.company} />
    <JobDetails description={job.description} tasks={job.tasks} />
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
