import React from 'react'
import './Contact.css'
import mail from '/mail.png?url';
import linkedin from '/linkedin.png?url';
import github from '/github.png?url';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3f633669-811b-4a63-ac55-1d9e2d44aab0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel free to send me a message about anything that you require me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt=''/><a href='riyay851@gmail.com'>Gmail</a>

                    </div>
                    <div className="contact-detail">
                        <img src={linkedin} alt=''/><a href='https://www.linkedin.com/in/riya-yadav-17b983287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bru%2F4rQlKSJC5hjuxLfIDXw%3D%3D'>LinkedIn</a>
                        
                    </div>
                    <div className="contact-detail">
                        <img src={github} alt=''/><a href='https://github.com/Riya-Yadav1'>GitHub</a>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''> Write Your Message Here</label>
                <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                <button className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>

  )
}

export default Contact