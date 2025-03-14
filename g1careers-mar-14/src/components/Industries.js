// src/components/Industries.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Industries() {
  const industries = [
    { icon: 'icon-9', title: 'Hotel', staff: '2853' },
    { icon: 'icon-10', title: 'Hospitality', staff: '2256' },
    { icon: 'icon-11', title: 'Kitchen', staff: '1408' },
    { icon: 'icon-12', title: 'Retail', staff: '1740' },
    { icon: 'icon-13', title: 'Special Events', staff: '3948' },
    { icon: 'icon-14', title: 'General Labor', staff: '2984' },
    { icon: 'icon-15', title: 'Driving', staff: '4509' },
    { icon: 'icon-16', title: 'Senior Living', staff: '1039' }
  ];

  return (
    <section className="industries-section pt_20 pb_120">
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Industries</span>
          <h2 className="title-animation">Industries Served</h2>
        </div>
        <div className="inner-container clearfix">
          {industries.map((industry, index) => (
            <div className="industries-block-one" key={index}>
              <div className="inner-box">
                <div className="icon-box"><i className={industry.icon}></i></div>
                <h3><Link to="/">{industry.title}</Link></h3>
                <p>{industry.staff} Staffs</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box centred mt_60">
          <Link to="/" className="theme-btn btn-one">View All Categories</Link>
        </div>
      </div>
    </section>
  );
}

export default Industries;