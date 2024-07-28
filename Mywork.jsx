import React from 'react'
import './Mywork.css'
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Work4 from './Work4';

const Mywork = () => {
  return (
    <div id='work' className="mywork">
            <h1>My Latest Work</h1>
    
        <div className="mywork-container">
            <Work1/>
            <Work2/>
            <Work3/>
            <Work4/>
        </div>
    </div>
  )
}

export default Mywork