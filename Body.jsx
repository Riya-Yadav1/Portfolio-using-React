import React from 'react'
import "./Body.css";
import pic from "/riya.jpg?url";


const Body = () => {
  return (
    <div id='home' className="hero">
      <img src={pic} alt=''/>
      <h1><span>I'm Riya Yadav,</span> Web Designer based in India. </h1>
      <p>  I'm a passionate <b> Web Developer/Designer </b>skilled in <b>React, HTML, CSS, JavaSript, Bootstrap(Framework)</b>. My journey in the world of coding has been a thrilling adventure, and I'm excited to share it with you. Explore my work, learn about my skills, and see how I can contribute to further projects. </p>
      <div className="hero-action">
        <div className="hero-connect"><a href='#contact'>Connect..</a></div>
          <div className="hero-resume"><a href='#resume'>Resume</a></div>
      </div>
    </div>
  )
}

export default Body
