import React from 'react'
import './Services.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const Services = () => {
  return (

    <div id='services' className="services">
        <h1>Services</h1>
        <div className="cards">
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
    </div>
  )
}

export default Services