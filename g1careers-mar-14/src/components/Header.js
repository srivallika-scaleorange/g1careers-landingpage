import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import Preloader from './Preloader';

function Header() {
  console.log('Header component rendered');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    // Show preloader on initial page load
    const timer = setTimeout(() => setShowPreloader(false), 1500); // Hide after 1.5s
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle mobile menu content
    if (mobileMenuRef.current) {
      const mainMenuContent = document.querySelector('.main-header .menu-area .main-menu .navbar-collapse');
      if (mainMenuContent) {
        const menuOuter = mobileMenuRef.current.querySelector('.menu-outer');
        if (menuOuter && mainMenuContent) {
          // Clone the menu content instead of moving it
          menuOuter.innerHTML = mainMenuContent.innerHTML;
        }
      }
    }

    // Add event listeners for dropdown buttons
    const setupDropdownHandlers = () => {
      const dropdownBtns = document.querySelectorAll('.mobile-menu li.dropdown .dropdown-btn');
      dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          this.classList.toggle('open');
          const prevElement = this.previousElementSibling;
          if (prevElement.classList.contains('megamenu')) {
            prevElement.style.display = prevElement.style.display === 'block' ? 'none' : 'block';
          } else if (prevElement.tagName === 'UL') {
            prevElement.style.display = prevElement.style.display === 'block' ? 'none' : 'block';
          }
        });
      });
    };

    setupDropdownHandlers();
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = (visible) => {
    if (visible) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
    setIsMobileMenuOpen(visible);
  };

  return (
    <>
      {showPreloader && <Preloader />}

      <header className="main-header header-style-one">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <figure className="logo-box pl_15">
                <a href="/"><img src={logo} alt="Logo" /></a>
              </figure>

              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={() => toggleMobileMenu(true)}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix">
                    <ul className="navigation clearfix">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about2">About</a></li>
                      <li><a href="/training">Training</a></li>
                      <li className="dropdown">
                        <a href="/">Job</a>
                        <ul>
                          <li><a href="/job-openings">Job Openings</a></li>
                          <li><a href="/job-apply">Job Apply</a></li>
                        </ul>
                        <div className="dropdown-btn"><i className="fas fa-angle-down"></i></div>
                      </li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content">
                <div className="search-btn mr_20">
                  <button className="search-toggler"><i className="icon-1"></i></button>
                </div>
                <div className="link-box mr_20"><a href="/login">Log In</a></div>
                <div className="btn-box"><a href="/" className="theme-btn btn-one">Get Started</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu" ref={mobileMenuRef}>
          <div className="menu-backdrop" onClick={() => toggleMobileMenu(false)}></div>
          <div className="close-btn" onClick={() => toggleMobileMenu(false)}>
            <i className="fas fa-times"></i>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/">
                <img src={logo} alt="" title="" />
              </a>
            </div>
            <div className="menu-outer"></div>
            <div className="contact-info">
            <h4>Contact Info</h4>
                    <ul>
                        <li>ScaleOrange Technologies, Madhapur, Hyderabad </li>
                        <li><a href="tel:+8801682648101">+91 8123700851</a></li>
                        <li><a href="mailto:info@example.com">delivery@gmail.com</a></li>
                    </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li><a href="/"><span className="fab fa-twitter"></span></a></li>
                <li><a href="/"><span className="fab fa-facebook-square"></span></a></li>
                <li><a href="/"><span className="fab fa-pinterest-p"></span></a></li>
                <li><a href="/"><span className="fab fa-instagram"></span></a></li>
                <li><a href="/"><span className="fab fa-youtube"></span></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;