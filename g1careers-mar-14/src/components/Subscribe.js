// src/components/Subscribe.jsx
import React from 'react';
import subscribeBg from '../assets/images/background/subscribe-bg.jpg';

function Subscribe() {
  return (
    <section className="subscribe-section pt_100 pb_100 centred">
      <div className="bg-layer parallax-bg" style={{backgroundImage: `url(${subscribeBg})`}}></div>
      <div className="auto-container">
        <div className="content-box">
          <h2>Subscribe for latest update</h2>
          <div className="form-inner">
            <form method="post" action="/contact">
              <div className="form-group">
                <div className="icon-box"><i className="far fa-envelope"></i></div>
                <input type="email" name="email" placeholder="Email Address" required />
                <button type="submit" className="theme-btn btn-one">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;