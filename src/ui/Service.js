import React from "react";
import RB from "../img/building resilience.jpg";
import CT from "../img/communication.jpg";
import RA from "../img/business-growth.jpg";
import HRImage from "../img/hr-consultancy.jpg";
import C4S from "../img/coaching.jpg";
import POO from "../img/outsourcing.jpg"; 
import CS from "../img/commercialization.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/business-growth.jpg';

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We are a <span style={{ color: "#155bd5" }}>Leaders</span> in providing tailored solutions for startups, including Coaching for Startups, People Operations Outsourcing, Commercialization Strategy, Resilience Building, Communication Tools, Reporting & Analytics, and Integration & Security.
              </h2>
            </div>

            <div className="row gy-5 pt-5 align-items-center" id="Educational-content">
              <div className="col-lg-5 col-md-6 service-item" data-aos="fade-up" data-aos-delay="100">
                <img src={RB} className="img-fluid" alt="Resilience Building" title="Educational-content" style={{ borderRadius: '15px' }} />
              </div>

              <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="100">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-shield-lock" style={{ color: "#f57813" }}></i> {/* Resilience Building */}
                </div>
                <div>
                  <h4 className="title">Resilience Building</h4>
                  <p className="description">
                    We provide tools to monitor challenges and create solutions, as well as tailored activities to strengthen startup resilience.
                  </p>
                  <p className="description">
                    Startups can access support during difficult phases, helping them overcome obstacles and stay on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="communication-tools">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-person-check" style={{ color: "#15a04a" }}></i> {/* Coaching for Startups */}
                </div>
                <div>
                  <h4 className="title">Coaching for Startups</h4>
                  <p className="description">
                    We work with startups to set clear goals, track progress, and develop action plans with deadlines. Our coaching services also include tools for overcoming obstacles and building startup resilience.
                  </p>
                  <p className="description">
                    We provide strategy development from ideation to product validation, commercialization, and market entry.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 service-item order-first order-sm-last" data-aos="fade-up" data-aos-delay="100">
                <img src={C4S} className="img-fluid" alt="Coaching for Startups" style={{ borderRadius: '15px' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list">
          <div className="container" id="reporting-analytics">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-5 col-md-6 service-item" data-aos="fade-up" data-aos-delay="100">
                <img src={RA} className="img-fluid" alt="Reporting & Analytics" style={{ borderRadius: '15px' }} />
              </div>

              <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="300">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart" style={{ color: "#f5cf13" }}></i> {/* Reporting & Analytics */}
                </div>
                <div>
                  <h4 className="title">Reporting & Analytics</h4>
                  <p className="description">
                    Track goal progress, measure resilience improvements, and get usage statistics for HR services with our reporting tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="communication-tools">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-chat-left-text" style={{ color: "#15a04a" }}></i> {/* Communication Tools */}
                </div>
                <div>
                  <h4 className="title">Communication Tools</h4>
                  <p className="description">
                    Our messaging system allows real-time communication between teams and clients, with reminders and updates.
                  </p>
                  <p className="description">
                    Teams can stay connected with notifications and feedback for seamless collaboration.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 service-item order-first order-sm-last" data-aos="fade-up" data-aos-delay="100">
                <img src={CT} className="img-fluid" alt="Communication Tools" style={{ borderRadius: '15px' }}  />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list">
          <div className="container" id="operation-outsourcing">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-5 col-md-6 service-item" data-aos="fade-up" data-aos-delay="100">
                <img src={POO} className="img-fluid" alt="Operation Outsourcing" style={{ borderRadius: '15px' }} />
              </div>

              <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="300">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-people" style={{ color: "#15a04a" }}></i> {/* People Operations Outsourcing */}
                </div>
                <div>
                  <h4 className="title">People Operations Outsourcing</h4>
                  <p className="description">
                    We offer tailored HR management services for startups, including recruitment management, employee lifecycle management, and HR support.
                  </p>
                  <p className="description">
                    Our platform supports HR requests, helping startups with the entire HR process without needing full-time staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="commercialization-strategy">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bag" style={{ color: "#15a04a" }}></i> {/* Commercialization Strategy */}
                </div>
                <div>
                  <h4 className="title">Commercialization Strategy</h4>
                  <p className="description">
                    We help startups with product ideation and validation, guiding them through commercialization planning and market entry strategies.
                  </p>
                  <p className="description">
                    Our commercialization planning includes go-to-market strategies, brand positioning, and growth planning.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 service-item order-first order-sm-last" data-aos="fade-up" data-aos-delay="100">
                <img src={CS} className="img-fluid" alt="Commercialization Strategy" style={{ borderRadius: '15px' }} />
              </div>
            </div>
          </div>
        </section>


        <section className="services-list">
        <div className="container" id="hr-consultancy">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-5 col-md-6 service-item" data-aos="fade-up" data-aos-delay="100">
              <img src={HRImage} className="img-fluid" alt="HR Consultancy" style={{ borderRadius: '15px' }} />
            </div>

            <div className="col-lg-7 col-md-6 service-item" data-aos="fade-up" data-aos-delay="300">
              <div className="icon flex-shrink-0">
                <i className="bi bi-person-check" style={{ color: "#15a04a" }}></i> {/* HR Consultancy */}
              </div>
              <div>
                <h4 className="title">HR Consultancy</h4>
                <p className="description">
                  Our HR consultancy services focus on optimizing your workforce management, enhancing employee engagement, and ensuring compliance with labor laws. We provide tailored solutions to help your business thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </>
  );
};

export default Service;
