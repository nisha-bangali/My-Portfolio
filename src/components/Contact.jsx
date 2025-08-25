import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          
          {/* Left Side - Image */}
          <div className="contact-info">
            <img 
              src="https://b2cdata.marketing.moveaws.com/images/contact/contact-hero.png" 
              alt="Contact illustration"
              className="contact-img"
            />
          </div>

          {/* Right Side - Form */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                placeholder="Enter your name" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Enter your email" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                className="form-control" 
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
