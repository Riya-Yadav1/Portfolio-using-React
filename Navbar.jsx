import React, { useState } from 'react'

import './Navbar.css'
import logo from "/riu_logo.jpg?url";
import underline from '/minus.png?url';



const Navbar = () => {
  const [menu,setmenu]=useState("home")
  return (
    <div className="navbar">
  <a href='#home'><img className="logo"src={logo} alt=""/></a>
  
  <h3 className='Nav-brand'>Portfolio</h3>
  
  <ul className='nav-menu'>
    <li><a href='#home'><p onClick={()=>setmenu("home")}>Home</p></a>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
    <li><a href='#about'><p onClick={()=>setmenu("about")}>About Me</p></a>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
    <li><a href='#services'><p onClick={()=>setmenu("services")}>Services</p></a>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
    <li><a href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></a>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
    <li><a href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></a>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
  </ul>
  <div className="nav-connect"><a href='#contact'>Connect..</a></div>
</div> 
  )
}

export default Navbar