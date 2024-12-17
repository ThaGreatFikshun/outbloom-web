import React, { useEffect } from "react";
import logo from "../img/Outbloom.png.png"; // Ensure this is the correct path
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const InnerHeader = () => {
  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // Assigning location variable
  const location = useLocation();
  const { pathname } = location;

  // JavaScript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  // Sticky header
  useEffect(() => {
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 80
          ? selectHeader.classList.add("sticked")
          : selectHeader.classList.remove("sticked");
      });
    }
  }, []);

  // Mobile view menu
  const mobilemenu = (event) => {
    event.preventDefault();
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("mobile-nav-active");
  };

  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center" onClick={toTop}>
            <img
              src={logo}
              alt="Outbloom Org"
              title="Outbloom Org"
              style={{ width: '150px', height: 'auto' }} // Adjusted size for better visibility
            />
          </Link>
          <span onClick={mobilemenu}>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          </span>
          <nav id="navbar" className="navbar">
            <ul onClick={mobilemenu}>
              <li>
                <Link to="/" className={splitLocation[1] === "" ? "active" : ""}> Home</Link>
              </li>
              <li>
                <Link to="/about" className={splitLocation[1] === "about" ? "active" : ""}> About Us</Link>
              </li>
              <li>
                <Link to="/services" className={splitLocation[1] === "services" ? "active" : ""}> Services</Link>
              </li>
              <li>
                <Link to="/careers" className={splitLocation[1] === "careers" ? "active" : ""}> Careers</Link>
              </li>
              <li>
                <Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}> Contact Us</Link>
              </li>
              <li>
                <Link to="/partner" className={splitLocation[1] === "partner" ? "active" : ""}> Partners</Link>
              </li>
              <li>
                <Link to="/hire" className={splitLocation[1] === "hire" ? "active" : ""}> Hire Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* CSS for Logo and Header */}
        <style jsx>{`
          .header .logo img {
            width: 150px; /* Ensures logo is visible */
            height: auto; /* Maintains aspect ratio */
          }
          #navbar ul {
            padding-left: 0; /* Removes default padding */
            margin: 0; /* Removes default margin */
          }
          #navbar ul li {
            margin-right: 15px; /* Adjusts space between navigation items */
          }
        `}</style>

      </header>

    </>
  );
};

export default InnerHeader;
