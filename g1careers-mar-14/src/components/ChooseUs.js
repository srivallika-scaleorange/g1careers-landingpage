// src/components/ChooseUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import shape2 from '../assets/images/shape/shape-2.png';

function ChooseUs() {
  const items = [
    { icon: 'icon-4', title: 'Retain Top Talent', text: 'Providing clear career paths and growth opportunities.' },
    { icon: 'icon-5', title: 'Stay Compliant', text: 'Educate employees about compliance requirements.' },
    { icon: 'icon-6', title: 'Improve Employee', text: 'Invest in employee training and development programs.' }
  ];

  return (
    <section className="chooseus-section pt_200 pb_90">
      <div className="pattern-layer" style={{backgroundImage: `url(${shape2})`}}></div>
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Why Us</span>
          <h2 className="title-animation">Why Choose Us</h2>
        </div>
        <div className="inner-container">
          <div className="row clearfix">
            {items.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block" key={index}>
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className={item.icon}></i></div>
                    <h3><Link to="/">{item.title}</Link></h3>
                    <p>{item.text}</p>
                    <div className="link"><Link to="/">Learn More<i className="icon-7"></i></Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;