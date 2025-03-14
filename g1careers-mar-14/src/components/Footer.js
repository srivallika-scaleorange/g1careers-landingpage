// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import icon4 from '../assets/images/icons/icon-4.png';
import icon5 from '../assets/images/icons/icon-5.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="widget-section p_relative pt_80 pb_100">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget mr_30">
                <figure className="footer-logo mb_20">
                  <Link to="/"><img src={logo} alt="G1Careers Logo" /></Link>
                </figure>
                <p>Since 2021, G1Careers has connecting hospitality workers to thousands of business.</p>
                <div className="download-btn">
                  <a href="/about" className="apple-store">
                    <img src={icon4} alt="" />
                    <span>Download on</span>App Store
                  </a>
                  <a href="/about" className="play-store">
                    <img src={icon5} alt="" />
                    <span>Get it on</span>Google Play
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title"><h4>For Workers</h4></div>
                <ul className="links-list clearfix">
                  <li><Link to="/">Find Work</Link></li>
                  <li><Link to="/">Jobs in Dubai</Link></li>
                  <li><Link to="/">Jobs in Virginia</Link></li>
                  <li><Link to="/">Jobs in California</Link></li>
                  <li><Link to="/">Jobs in Alaska</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title"><h4>For Business</h4></div>
                <ul className="links-list clearfix">
                  <li><Link to="/">Merchandising</Link></li>
                  <li><Link to="/">Hospitality Staff</Link></li>
                  <li><Link to="/">General Labour</Link></li>
                  <li><Link to="/">Car Drivers</Link></li>
                  <li><Link to="/">Bus Driver</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title"><h4>Company</h4></div>
                <ul className="links-list clearfix">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/">Career</Link></li>
                  <li><Link to="/">Partners</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/">Clients</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title"><h4>Help & Support</h4></div>
                <ul className="links-list clearfix">
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/faq">General FAQ</Link></li>
                  <li><Link to="/">Support Center</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="bottom-inner">
            <div className="copyright">
              <p>Copyright © 2025 <Link to="/">G1Careers</Link> All rights reserved.</p>
            </div>
            <ul className="social-links">
              <li><h5>Follow Us On:</h5></li>
              <li><Link to="/"><i className="icon-22"></i></Link></li>
              <li><Link to="/"><i className="icon-23"></i></Link></li>
              <li><Link to="/"><i className="icon-24"></i></Link></li>
              <li><Link to="/"><i className="icon-25"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;