import React from 'react'
import './Card1.css'
import Graphic from "/Graphic-logo.png?url";

const Card1 = () => {
  return (
    <div className="card1">
        <img className='graphic-logo'src={Graphic} alt=''/>
        <div className="content">
            <h3>Graphic Design</h3>
            <p>I am skilled in designing graphics using <b>Corel DRAW and AI graphic tools.</b></p>
            
        </div>
    </div>
  )
}

export default Card1