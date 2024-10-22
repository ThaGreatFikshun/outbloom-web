import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../img/business-growth.jpg';

const Revenue = () => {
  return (
    <>
      <section id="revenue" className="revenue-section">
        <div className="container" data-aos="fade-up" data-aos-delay="300">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="section-title">Drive Revenue and Optimize Your Business</h2>
              <p>
              With nearly two decades of expertise, Outbloom has honed its ability to drive revenue and optimize business operations for startups and established companies alike. We specialize in providing customized solutions that not only enhance your existing business models but also uncover new growth opportunities.
              </p>
              <p>
              Our diverse range of services, from coaching and HR outsourcing to commercialization strategies and technology integration, is designed to meet your specific business goals. By staying at the forefront of technological trends and consistently innovating, we deliver impactful results that streamline operations and boost profitability.
              </p>
              <p>
              Whether you need to optimize your workforce, improve market entry strategies, or secure your business through integrated solutions, Outbloom is committed to helping you achieve meaningful, sustainable growth.
              </p>
              <Link to="/about" className="btn-get-started">Learn More</Link>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <div className="img-wrap">
                <img src={dashboard} alt="Revenue Dashboard" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Revenue;
