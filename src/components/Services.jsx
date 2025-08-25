import React from "react";
import "../styles/service.css";

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="services-container">

          {/* Web Development */}
          <div className="card service-item">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>
              Custom web applications built with modern technologies,
              responsive design, and optimal performance.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="card service-item">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Responsive Design</h3>
            <p>
              Websites that work seamlessly across all devices,
              from desktops to smartphones.
            </p>
          </div>

          {/* Backend Development */}
          <div className="card service-item">
            <div className="service-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Backend Development</h3>
            <p>
              Robust server-side solutions, RESTful APIs, and database
              design for your applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
