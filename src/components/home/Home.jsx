import React from 'react'
// import Navbar from '../navbar/Navbar'
import About from '../about/About'
import Experience from '../experience/Experience'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import { SlSocialLinkedin } from 'react-icons/sl';
import { ImGithub } from 'react-icons/im';
import { SlSocialInstagram } from 'react-icons/sl';
import './home.css'



const Home = () => {
  return (
    <div>
      <div className="maincontent">
        <div className="content">
          <span>Hey!</span>
          <h1>
            I'm <span>Mani Vardhan</span><br />
            an Web  Developer
          </h1>
          <p>Web developer based in India.
            <br />
            I'm will develop beautiful and responsive design for all devices 😍
          </p>
          <div className="social-links">
            <SlSocialLinkedin className='social-icon' />
            <ImGithub className='social-icon' />
            <SlSocialInstagram className='social-icon' />
          </div>
          <div className="buttons">
            <span><a href="mailto:manivardhaan112356@gmail.com">mail me</a></span>
            <span><a href="/src/">Download CV</a></span>
            <span></span>
          </div>
        </div>
        <div className="image-profile"></div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
