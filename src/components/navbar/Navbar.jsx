import React from 'react'
// import { SlSocialLinkedin } from 'react-icons/sl';
// import { ImGithub } from 'react-icons/im';
// import { SlSocialInstagram } from 'react-icons/sl';
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div>
         <navbar>
            <div className="navbar">
               <div className="logo">
                  <p><span></span> MANI VARDHAN</p>
               </div>
               <div className="desktop-menu">
                  <ul>
                     <Link to='/' className='mani'><li>Home</li></Link>
                     <Link to='/about' className='mani'><li>About</li></Link>
                     <Link to='/experience' className='mani'><li>Experience</li></Link>
                     <Link to='/projects' className='mani'><li>Projects</li></Link>
                     <Link to='/contact' className='mani'><li>Hire me</li></Link>
                  </ul>
               </div>
            </div>
         </navbar>
         {/* <br />
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
                  <SlSocialLinkedin className='social-icon'/>
                  <ImGithub className='social-icon'/>
                  <SlSocialInstagram className='social-icon'/>
               </div>
               <div className="buttons">
                  <span>Mail me</span>
                  <span>Download CV</span>
               </div>
            </div>
            <div className="image-profile"></div>
         </div> */}

      </div>
   )
}

export default Navbar
