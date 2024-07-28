import React from 'react'
import './About.css'
import pattern from '/desn.jpg?url'
import profile from '/dsgn.jpg?url'

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={pattern} alt=''/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello, I'm  <b>Riya Yadav,</b> a dedicated and innovative web developer with expertise in the <b>MERN stack. </b>I specialize in creating responsive and interactive websites using <b>React, HTML, and CSS.</b> My journey in web development has been fueled by a passion for problem-solving and a commitment to continuous learning. My portfolio showcases a range of projects where I've successfully transformed complex requirements into intuitive and efficient web applications.</p>
                    <p>With a keen eye for detail and a proactive approach, I thrive in dynamic, collaborative environments. My strong communication skills and technical proficiency allow me to effectively translate client needs into functional, visually appealing web solutions. I am always eager to take on new challenges and contribute my skills to impactful projects.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML&CSS</p><hr style={{width:'80%'}}/></div>
                    <div className="about-skill"><p>Corel Draw</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="achievements">
            <div className="achievement">
                <h1>5+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="achievement">
                <h1>3+</h1>
                <p>Certificates</p>
            </div>
            <hr/>
            <div className="achievement">
                <h1>15+</h1>
                <p>Happy clients</p>
            </div>
        </div>
    </div>
    
  )
}

export default About