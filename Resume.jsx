import React from 'react'
import resume from '/resume.png?url';
import './Resume.css'



const Resume = () => {
  return (
    <div id='resume' className="resume">
        <h1>Resume</h1>
         <img src={resume} alt=''/> 
       

    </div>
  )
}

export default Resume