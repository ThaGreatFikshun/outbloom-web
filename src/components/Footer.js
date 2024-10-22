import React from "react";
import footerLogo from '../img/Outbloom-logo (1).png';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="Out Bloom Logo" title="Out Bloom" />
                </Link>
                <p>
                  Out Bloom empowers startups to ideate, innovate, and commercialize their products. We offer Coaching, People Operations Outsourcing, and Commercialization Strategies to help businesses scale.
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

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/partners">Partners</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/hire">Hire Us</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-star"></i>
                  <HashLink smooth to="/services/#Coaching-for-Startups">
                    Coaching for Startups
                  </HashLink>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <HashLink smooth to="/services/#People-Operations-Outsourcing">
                    People Operations Outsourcing
                  </HashLink>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <HashLink smooth to="/services/#Commercialization-Strategy">
                    Commercialization Strategy
                  </HashLink>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <HashLink smooth to="/services/#Resilience-Building">
                    Resilience Building
                  </HashLink>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <HashLink smooth to="/services/#Integration-and-Security">
                    Integration & Security
                  </HashLink>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <HashLink smooth to="/services/#Marketing-Strategy">
                    Marketing Strategy
                  </HashLink>
                </li>
              </ul>
            </div>


              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                  Moi Avenue, <br /> 2nd Street, <br /> 00100 Nairobi, Kenya <br />
                  <strong>Tel:</strong> <a href="tel:+254722925211">+254 722 925 211</a><br />
                  <strong>Email:</strong> <a href="mailto:info@outbloominfo.com">info@outbloom.org</a><br />
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span>&copy; {new Date().getFullYear()} Out Bloom. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
