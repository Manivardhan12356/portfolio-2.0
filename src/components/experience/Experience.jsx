import React from 'react'
import './experience.css'
const Experience = () => {
  return (
    <div className='skills-experience'>
      <div className='skills'>
        <h3>Skills</h3>
        <div className="skills-img">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <p className='para'>A recent graduate with 2 months of freelance experience and 4.5 months of job experience as a front-end developer.Proficient in HTML, CSS, and JavaScript.Strong problem-solving abilities and a quick learner.Proficient in using React.js and Redux for building highly efficient and scalable web applications.</p>
        <h4>work experience</h4>
        <div className="work-experience">
          <span>2022-09-22 to 2023-01-13</span>
          <p>Cactus global-(Software Engineer)</p>
          <ul>
            <li>Developed and designed a responsive website for a company pages using HTML, CSS, and JavaScript.</li>
            <li>Developed and designed a responsive website for a company pages using react,tailwind CSS, and strapi cms.</li>
          </ul>
        </div>
        <div className="work-experience">
          <span>Two Months</span>
          <p>FREELANCE-(CREATED LANDING PAGES)</p>
          <ul>
            <li>I'm design and developed  a figma design to html ,css and JavaScript for landing pages</li>
            <li> I'm design and developed a responsive website for client using html ,css and JavaScript,react,tailwind CSS, and strapi cms.</li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Experience
