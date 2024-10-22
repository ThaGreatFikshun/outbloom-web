import React from "react";
import { Link } from "react-router-dom";

// Service data to improve maintainability
const services = [
  {
    title: "Coaching for Startups",
    description: "We partner with you to focus on your goals, build resilience, and develop actionable strategies to bring your vision to life.",
    details: [
      "Goal and Action Partner: \"We help you turn vision into reality.\"",
      "Building Resilience: \"Overcome challenges with our expert guidance.\"",
      "Strategy Development: \"From product development to market success.\"",
    ],
    icon: "bi bi-person-workspace",
    iconColor: "#f57813",
    buttonText: "Schedule a Consultation",
    link: "/services/coaching",
    aosDelay: 100,
  },
  {
    title: "People Operations Outsourcing",
    description: "Tailored HR services for startups that can’t afford full-time HR staff, ensuring smooth day-to-day operations.",
    details: [
      "Recruitment: \"We help you find the right talent.\"",
      "Employee Contracting: \"Managing contracts and onboarding seamlessly.\"",
      "Employee Relations: \"Ensuring smooth operations between employers and employees.\"",
    ],
    icon: "bi bi-people",
    iconColor: "#15a04a",
    buttonText: "Get a Free HR Consultation",
    link: "/services/people-operations",
    aosDelay: 200,
  },
  {
    title: "Commercialization Strategy",
    description: "We support startups transitioning from product development to successful market entry and growth.",
    details: [
      "Market Research: \"In-depth analysis to understand your market.\"",
      "Brand Strategy: \"Developing a brand that resonates with your audience.\"",
      "Launch Planning: \"Preparing for a successful product launch.\"",
      "Growth Strategy: \"Sustaining growth with innovative strategies.\"",
    ],
    icon: "bi bi-bar-chart-line",
    iconColor: "#f5cf13",
    buttonText: "Learn More",
    link: "/services/commercialization",
    aosDelay: 300,
  },
  {
    title: "Integration & Security",
    description: "We prioritize the security of our solutions and offer integrations with various platforms to ensure seamless user experiences.",
    details: [
      "Integration: \"Connect with various platforms for enhanced functionality.\"",
      "Data Security: \"Protecting your data with state-of-the-art measures.\"",
      "User Experience: \"Ensuring a seamless and secure user experience.\"",
    ],
    icon: "bi bi-shield-lock",
    iconColor: "#15a04a",
    buttonText: "Explore Integration Options",
    link: "/services/integration-security",
    aosDelay: 400,
  },
  {
    title: "Marketing Strategy",
    description: "Crafting tailored marketing strategies that resonate with your target audience and drive engagement.",
    details: [
      "Digital Marketing: \"Leveraging online platforms to reach your audience.\"",
      "Content Creation: \"Creating compelling content that tells your brand story.\"",
      "SEO & Analytics: \"Optimizing for search engines and tracking performance.\"",
    ],
    icon: "bi bi-megaphone",
    iconColor: "#007bff",
    buttonText: "Get Started with Marketing",
    link: "/services/marketing-strategy",
    aosDelay: 500,
  },
];

const ServiceItem = ({ service }) => {
  return (
    <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={service.aosDelay}>
      <div className="single-service">
        <div className="icon flex-shrink-0">
          <i className={service.icon} style={{ color: service.iconColor }}></i>
        </div>
        <div>
          <h4 className="title">
            <Link to={service.link} className="stretched-link">
              {service.title}
            </Link>
          </h4>
          <p className="description">{service.description}</p>
          <ul className="service-details">
            {service.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <Link to={service.link} className="btn-get-started">{service.buttonText}</Link>
        </div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <section id="services-list" className="services-list">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>What we do?</h2>
          <p>
            At Out Bloom, we provide tailored services for startups, helping them navigate challenges and scale their operations efficiently.
          </p>
        </div>
        <div className="row gy-5">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
