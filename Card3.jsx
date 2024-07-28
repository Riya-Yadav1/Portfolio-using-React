import React from 'react'
import './Card3.css';
import code from '/code.png?url';

const Card3 = () => {
  return (
    <div className="card3">
        <img className='code-logo'src={code} alt=''/>
        <div className="backend-content">
            <h3>Backend</h3>
            <p>I am proficient in backend development using Python.</p>
        </div>
    </div>
    
  )
}

export default Card3