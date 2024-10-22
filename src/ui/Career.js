import React from "react";
import career from "../img/hiring.jpg";
import careerHeader from "../img/business-growth.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Careers"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                Do what you LOVE. Join us to build a great future together.
              </h2>
            </div>

            <div className="row gy-4 blog-details">
              <div className="col-lg-6">
                <img
                  src={career}
                  className="img-fluid"
                  alt="Join us at Out Bloom to build a great future"
                  title="Join us at Out Bloom to build a great future"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  At Out Bloom, we believe people are the core of any successful business. Our dynamic and fast-paced work environment is driven by talented individuals who propel us forward. As we continue to expand, we are always on the lookout for motivated and skilled individuals to grow alongside us.
                </p>
                <p>
                  We nurture talent with a long-term vision, offering an exciting work atmosphere and exceptional growth opportunities. Whether you're looking to grow your skills or take your career to the next level, Out Bloom is the place to be.
                </p>
                <div className="content">
                  <blockquote>
                    <p>
                      Interested? Send your resume to
                      <a href="mailto:hr@outbloom.org"> hr@outbloom.org</a>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section id="openings" className="openings">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Current Job Openings</h2>
              <p>Explore our exciting career opportunities. We are looking for passionate individuals to join our growing team.</p>
            </div>

            <div className="row gy-4">
              {/* Job Opening 1 */}
              <div className="col-lg-4">
                <div className="job-opening">
                  <h4>Software Engineer</h4>
                  <p>
                    We're looking for a talented software engineer to develop innovative solutions and enhance user experience. 
                  </p>
                  <ul>
                    <li>Experience with React, Node.js, or Flutter</li>
                    <li>Problem-solving and analytical skills</li>
                    <li>Collaborative team player</li>
                  </ul>
                  <a href="mailto:hr@outbloom.org" className="apply-btn">
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Job Opening 2 */}
              <div className="col-lg-4">
                <div className="job-opening">
                  <h4>HR Manager</h4>
                  <p>
                    Join our People Operations team to oversee recruitment, employee relations, and organizational development.
                  </p>
                  <ul>
                    <li>Experience in HR roles (3+ years)</li>
                    <li>Strong interpersonal and communication skills</li>
                    <li>Knowledge of labor laws and HR best practices</li>
                  </ul>
                  <a href="mailto:hr@outbloom.org" className="apply-btn">
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Job Opening 3 */}
              <div className="col-lg-4">
                <div className="job-opening">
                  <h4>Marketing Specialist</h4>
                  <p>
                    We're seeking a marketing specialist to develop and execute strategies that drive brand awareness and engagement.
                  </p>
                  <ul>
                    <li>Experience in digital marketing and SEO</li>
                    <li>Strong writing and content creation skills</li>
                    <li>Knowledge of analytics and reporting tools</li>
                  </ul>
                  <a href="mailto:hr@outbloom.org" className="apply-btn">
                    Apply Now
                  </a>
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

export default Career;
