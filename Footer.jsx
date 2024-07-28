import React from 'react'
import './Footer.css'
import footer_logo from '/riu_logo.jpg?url';
import user_icon from '/user.png?url';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt=''/>
                <h1>Riya Yadav</h1>
                <p>I am a fresher web designer from India, proficient in designing websites using HTML, CSS, Bootstrap, and animation tools, with additional skills in backend development using Python.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Riya Yadav. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer