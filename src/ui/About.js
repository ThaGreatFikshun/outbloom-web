import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import about_img from '../img/Growth.jpg';
import md from '../img/team/no-image.jpg';
import se from '../img/team/Fikshun.png';
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
              <p>Out Bloom was founded in 2024 with a clear mission: to empower startups by providing the time, resources, and expertise they need to ideate, innovate, and commercialize their products. We recognize that after the 'aha' moment, the real work begins. Our goal is to support startups through the complexities of launching, validating, and growing their products, helping them navigate the often-complicated journey from concept to market.</p>
              <p>The name "Out Bloom" reflects our philosophy of nurturing relationships that benefit all parties involved. We are committed to partnering with our clients as goal and action partners, focusing on their objectives while building resilience to face the inevitable obstacles that arise. Our journey is not just about enhancing top-line revenue; it’s also about fostering a company culture that values our employees and gives back to the community.</p>
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
                        <p>Out Bloom is dedicated to providing comprehensive coaching, strategic guidance, and outsourced HR services to help startups navigate their growth journey, overcome challenges, and achieve their goals with resilience and confidence.</p>
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
              <p>Leveraging their vast experience within the Telecom value-added services industry, Out Bloom's leadership team is dedicated to meet and exceed customer expectations with innovative and cost-effective solutions, industry know-how, and unmatched services.</p>
            </div>
            <div className="row member d-flex align-items-center ">
              <div className="col-md-2">
                <div className="pic"><img src={md} className="img-fluid" alt="" /></div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>Joyce Maingi</h4>
                  <span>CEO & HR Manager</span>
                  <p>
                  Joyce Maingi is a seasoned Human Resource professional with over 10 years of experience in the public sector. Currently serving as the Human Resource and Administration Manager at Konza Technopolis Development Authority, she brings a wealth of knowledge and expertise in managing human capital.
                  </p>
                  <p>
                  She holds an MSc in Human Resource Management from Jomo Kenyatta University of Agriculture and Technology, a Bachelor of Commerce in Human Resource Management from the University of Nairobi, and a Higher National Diploma in Human Resource Management from the Institute of Human Resource Management.
                  </p>
                  <p>
                  Ms. Maingi has previously worked with esteemed institutions such as the Kenya School of Law, Kenya School of Government, and the Kenya Film Commission, further enriching her background in human resource management. She is also a full member of the Institute of Human Resource Management and has participated in numerous training and seminars to continuously enhance her skills and expertise in the field.
                  </p>
                  <div className="social">

                    <Link to="/"><i className="bi bi-twitter"></i></Link>
                    <Link to="/"><i className="bi bi-linkedin"></i></Link>
                    <Link to="/" target="_blank"><i className="bi bi-facebook"></i></Link>
                    <Link to="/" target="_blank"><i className="bi bi-youtube"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
              <div className="col-md-2">
                <div className="pic"><img src={se} className="img-fluid" alt="" /></div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>James (ThaGreatFikshun)</h4>
                  <span>Software Engineer</span>
                  <p>
                  As a graduate of Applied Computer Science from United States International University-Africa, James brings a unique blend of technical expertise and a passion for innovation to the field of UI/UX engineering. His background in development, coupled with strong communication skills, positions him as a driving force for positive change through technology.
                  </p>
                  <p>
                  Proficient in a range of programming languages and tools such as Flutter, Django, Kotlin, Python, PHP, HTML, CSS, C#, and the .NET framework, James has proven his ability to tackle complex challenges with ease. He also holds expertise in Microsoft Excel data analysis, SQL Server, IT support, and various system analysis and design methodologies.
                  </p>
                  <p>
                  In his current role as a UI/UX Engineer, James has shown exceptional skills in collaborating with DevOps teams, crafting intuitive interfaces, and designing wireframes that effectively communicate design concepts. His work closely integrates UI/UX elements with backend functionalities to optimize user workflows and productivity within the DevOps pipeline.
                  </p>
                  <p>
                  Driven by a passion for continuous improvement, James constantly assesses and enhances the usability and accessibility of software applications to meet the evolving needs of users. His commitment to delivering impactful solutions makes him a key contributor to projects aimed at advancing innovation in UI/UX engineering.
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default About;
