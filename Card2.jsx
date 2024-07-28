import React from 'react'
import './Card2.css';
import Web from "/web.png?url";

const Card2 = () => {
  return (
    <div className="card2">
        <img className='web-logo' src={Web} alt=''/>
        <div className="web-content">
            <h3>Web Design</h3>
            <p>I am skilled in designing websites using <b>HTML, CSS, Bootstrap, and animation tools.</b></p>
        </div>
    </div>
  )
}

export default Card2