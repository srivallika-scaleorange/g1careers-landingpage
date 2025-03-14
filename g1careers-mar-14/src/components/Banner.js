// src/components/Banner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import author1 from '../assets/images/resource/author-1.png';
import author2 from '../assets/images/resource/author-2.png';
import author3 from '../assets/images/resource/author-3.png';
import author4 from '../assets/images/resource/author-4.png';
import author5 from '../assets/images/resource/author-5.png';
import author6 from '../assets/images/resource/author-6.png';
import shape1 from '../assets/images/shape/shape-1.png';

function Banner() {
  return (
    <section className="banner-section p_relative centred">
      <div className="pattern-layer" style={{backgroundImage: `url(${shape1})`}}></div>
      <div className="author-box">
        <div className="author author-1"><img src={author1} alt="Waiter" /><span>Waiter</span></div>
        <div className="author author-2"><img src={author2} alt="Assistant" /><span>Assistant</span></div>
        <div className="author author-3"><img src={author3} alt="Painter" /><span>Painter</span></div>
        <div className="author author-4"><img src={author4} alt="Finance" /><span>Finance</span></div>
        <div className="author author-5"><img src={author5} alt="Cleaner" /><span>Cleaner</span></div>
        <div className="author author-6"><img src={author6} alt="Nurse" /><span>Nurse</span></div>
      </div>
      <div className="auto-container">
        <div className="content-box">
          <h2>Find Your Next Career Here Our Open Positions</h2>
          <p>Explore our open positions to find roles that align with your interests and expertise.</p>
          <div className="btn-box">
            <Link to="/" className="theme-btn btn-one mr_20"><span>Find Works</span></Link>
            <Link to="/" className="theme-btn banner-btn">Hire Talents Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;