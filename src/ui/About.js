import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import about_img from '../img/Growth.jpg';
import md from '../img/team/no-image.jpg';
import se from '../img/team/Fikshun.png';
import joyceImage from '../img/team/joyce.jpg'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/Outsourced-HR.jpg';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={abtHeader} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Empowering Startups to Achieve Their Vision</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
              <div className="col-lg-6">
                <img src={about_img} className="img-fluid" alt="Empowering Startups" title="Empowering Startups" />
              </div>
              <div className="col-lg-6">
              <p>Outbloom was founded in 2024 with a clear mission: to empower startups by providing the time, resources, and expertise they need to ideate, innovate, and commercialize their products. We recognize that after the 'aha' moment, the real work begins. Our goal is to support startups through the complexities of launching, validating, and growing their products, helping them navigate the often-complicated journey from concept to market.</p>
              <p>The name "Outbloom" reflects our philosophy of nurturing relationships that benefit all parties involved. We are committed to partnering with our clients as goal and action partners, focusing on their objectives while building resilience to face the inevitable obstacles that arise. Our journey is not just about enhancing top-line revenue; it’s also about fostering a company culture that values our employees and gives back to the community.</p>
              <p>Since our inception, we have positioned ourselves as a leader in outsourced HR services for startups, providing comprehensive support for the day-to-day employee lifecycle, including recruitment and employee contracting. Our determination to help our clients succeed is matched only by our commitment to social responsibility, as we dedicate a portion of every dollar earned to making a positive difference in the world.</p>

              </div>
            </div>
          </div>
        </section>

        <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title">Vision</h4>
                        <p>To empower startups with the tools, expertise, and support needed to transform innovative ideas into successful, sustainable businesses.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title">Mission</h4>
                        <p>Outbloom is dedicated to providing comprehensive coaching, strategic guidance, and outsourced HR services to help startups navigate their growth journey, overcome challenges, and achieve their goals with resilience and confidence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title">Our Values</h4>
                        <ul>
                          <li><strong>Innovation:</strong> We foster creativity and support groundbreaking ideas that drive the future of startups.</li>
                          <li><strong>Partnership:</strong> We collaborate closely with our clients, aligning our efforts with their goals to ensure mutual success.</li>
                          <li><strong>Resilience:</strong> We build and nurture the strength to face and overcome obstacles, turning challenges into opportunities.</li>
                          <li><strong>Excellence:</strong> We strive for the highest quality in our services, ensuring exceptional support and results for every startup.</li>
                          <li><strong>Integrity:</strong> We uphold transparency, honesty, and ethical practices in all our interactions and services.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Meet our dedicated team of professionals committed to delivering innovative solutions and exceptional service.</p>
          </div>

          {/* Team Member: Joyce Maingi */}
          <div className="row member d-flex align-items-center">
            <div className="col-md-2">
              <div className="pic"><img src={joyceImage} className="img-fluid" alt="Joyce Maingi" /></div>
            </div>
            <div className="col-md-10">
              <div className="member-info">
                <h4>Joyce Maingi</h4>
                <span>Mentor & Coach</span>
                <p>
                  Joyce is a seasoned HR professional with over 10 years of experience. As the HR and Administration Manager, she excels in managing human capital effectively.
                </p>
                <p>
                  She holds an MSc in Human Resource Management and is a full member of the Institute of Human Resource Management.
                </p>
                <div className="social">
                  <Link to="/"><i className="bi bi-twitter"></i></Link>
                  <Link to="/" target="_blank"><i className="bi bi-linkedin"></i></Link>
                  <Link to="/" target="_blank"><i className="bi bi-facebook"></i></Link>
                  <Link to="/" target="_blank"><i className="bi bi-youtube"></i></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member: James (ThaGreatFikshun) */}
          <div className="row member d-flex align-items-center mt-4">
            <div className="col-md-2">
              <div className="pic"><img src={se} className="img-fluid" alt="James ThaGreatFikshun" /></div>
            </div>
            <div className="col-md-10">
              <div className="member-info">
                <h4>James (ThaGreatFikshun)</h4>
                <span>IT Data Specialist</span>
                <p>
                  James is a graduate of Applied Computer Science with expertise in UI/UX engineering. He is proficient in various programming languages and focuses on enhancing user experiences through innovative design.
                </p>
                <p>
                  His work integrates UI/UX with backend functionalities to optimize workflows in the DevOps pipeline.
                </p>
                <div className="social">
                  <Link to="/"><i className="bi bi-twitter"></i></Link>
                  <Link to="/" target="_blank"><i className="bi bi-linkedin"></i></Link>
                  <Link to="/" target="_blank"><i className="bi bi-facebook"></i></Link>
                  <Link to="/" target="_blank"><i className="bi bi-youtube"></i></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member: Stella Muhoro */}
          <div className="row member d-flex align-items-center mt-4">
            <div className="col-md-2">
              <div className="pic"><img src={md} className="img-fluid" alt="Stella Muhoro" /></div> {/* Ensure you import stellaImage */}
            </div>
            <div className="col-md-10">
              <div className="member-info">
                <h4>Stella Muhoro</h4>
                <span>Marketing Specialist</span>
                <p>
                  Stella specializes in crafting effective marketing strategies that enhance brand visibility and engagement. With a background in digital marketing, she drives campaigns that resonate with audiences.
                </p>
              </div>
            </div>
          </div>

          {/* Team Member: Ruth Munithi */}
          <div className="row member d-flex align-items-center mt-4">
            <div className="col-md-2">
              <div className="pic"><img src={md} className="img-fluid" alt="Ruth Munithi" /></div> {/* Ensure you import ruthImage */}
            </div>
            <div className="col-md-10">
              <div className="member-info">
                <h4>Ruth Munithi</h4>
                <span>Startup Communication Specialist</span>
                <p>
                  Ruth focuses on enhancing communication strategies for startups, ensuring clear messaging that aligns with business goals. Her expertise helps startups effectively engage with their audiences.
                </p>
              </div>
            </div>
          </div>

        </div> {/* End of container */}
      </section>


      </main>
      <Footer />
    </>
  );
}

export default About;
