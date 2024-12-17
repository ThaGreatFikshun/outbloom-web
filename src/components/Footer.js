import React from "react";
import footerLogo from '../img/2.png';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">

              {/* Logo and Description */}
              <div className="col-lg-4 col-md-12 footer-info text-center text-md-start">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="Outbloom Logo" title="Outbloom" />
                </Link>
                <p>
                  Outbloom empowers startups to ideate, innovate, and commercialize their products. We offer Coaching, People Operations Outsourcing, and Commercialization Strategies to help businesses scale.
                </p>
                <div className="social-links d-flex mt-3">
                  <a href="https://twitter.com/OutBloom" className="twitter" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/OutBloom" className="facebook" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/outbloom/" className="linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.youtube.com/outbloom/" className="youtube" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/outbloom/" className="instagram" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  {["Home", "About Us", "Services", "Careers", "Contact Us", "Partners", "Hire Us"].map((link) => (
                    <li key={link}>
                      <i className="bi bi-dash"></i>
                      <Link to={`/${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  {["Coaching for Startups", "People Operations Outsourcing", "Commercialization Strategy", "Resilience Building", "Integration & Security", "Marketing Strategy"].map((service) => (
                    <li key={service}>
                      <i className="bi bi-star"></i>
                      <HashLink smooth to={`/services/#${service.replace(/\s+/g, '-')}`}>
                        {service}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>We’re here to help! If you have any questions or need assistance, feel free to reach out to us through the following channels:</p>
                <address>
                  <strong>Address:</strong><br />
                  Ruhan Plaza<br />
                  P.O. Box 23528-00100<br />
                  Nairobi, Kenya<br /><br />
                  
                  <strong>Phone:</strong> 
                  <a href="tel:+254722925211">  +254 722 925 211</a><br />
                  
                  <strong>Email:</strong> 
                  <a href="mailto:info@outbloom.org">  info@outbloom.org</a><br />
                </address>

                {/* Operating Hours */}
                <div className="operating-hours mt-3">
                  <h5>Operating Hours</h5>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />
                     Saturday: 10:00 AM - 2:00 PM<br />
                     Sunday: Closed</p>
                </div>
              </div>

            </div> {/* End of row */}
          </div> {/* End of container */}
        </div> {/* End of footer-content */}

        {/* Legal Section */}
        <div className="footer-legal bg-dark text-light py-3">
          <div className="container text-center">
            <span>&copy; {new Date().getFullYear()} Outbloom. All Rights Reserved.</span>
          </div>
        </div>

        {/* Floating WhatsApp Chat Icon */}
        <a
          href={`https://wa.me/254722925211`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          title="Chat with us on WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

      </footer>

      {/* CSS for Floating WhatsApp Icon */}
      <style jsx>{`
  .whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25D366; /* WhatsApp green */
    color: white;
    border-radius: 50%; /* Ensures the icon is perfectly round */
    padding: 15px; /* Space around the icon */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Slightly stronger shadow for depth */
    font-size: 28px; /* Increased font size for better visibility */
    z-index: 1000;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for hover effects */
    display: flex; /* Centering icon */
    align-items: center; /* Centering icon vertically */
    justify-content: center; /* Centering icon horizontally */
    width: 60px; /* Fixed width for a consistent round shape */
    height: 60px; /* Fixed height for a consistent round shape */
  }
  
  .whatsapp-float:hover {
    background-color: #25D366; /* Darker green on hover */
    transform: scale(1.1); /* Slightly enlarge on hover for effect */
  }
`}</style>


    </>
  );
};

export default Footer;
