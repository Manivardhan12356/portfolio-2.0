import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
     <div className='contact'>
      <h2>contact me</h2>
      <div className="contact-details">
          <span>mail me</span><a href='mailto:manivardhan1829@gmail.com' className='buttons-contact'>click here</a><br />
          <span>Instagram</span><a href='https://instagram.com/mr_ben_10_00?igshid=ZmZhODViOGI='  className='buttons-contact'>Click here</a><br />
          <span>Linkedin</span><a href='https://www.linkedin.com/in/mani-vardhan-4689151b1/' className='buttons-contact'>Click here</a><br />
          <span>Whatsapp</span><a href='http://wa.me//+919553979185' className='buttons-contact'>Click here</a> 
      </div>
     </div>
    </>
  )
}

export default Contact