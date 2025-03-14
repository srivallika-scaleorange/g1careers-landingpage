// src/components/Process.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shape3 from '../assets/images/shape/shape-3.png';

function Process() {
  const [activeTab, setActiveTab] = useState('tab-1');

  const processSteps = [
    { count: 1, title: 'Sign up, It\'s Free!', text: 'Our team will set up your account and help you build job to  easy-to-use web dashboard.' },
    { count: 2, title: 'Post jobs in minutes', text: 'Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.' },
    { count: 3, title: 'Review Your Staff', text: 'View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.' }
  ];

  return (
    <section className="process-section pt_120 pb_90">
      <div className="pattern-layer" style={{backgroundImage: `url(${shape3})`}}></div>
      <div className="auto-container">
        <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Process</span>
          <h2 className="title-animation">How It Works?</h2>
        </div>
        <div className="tabs-box">
          <ul className="tab-btns tab-buttons">
            <li 
              className={`tab-btn ${activeTab === 'tab-1' ? 'active-btn' : ''}`} 
              onClick={() => setActiveTab('tab-1')}
            >
              <i className="far fa-user"></i>For Talents
            </li>
            <li 
              className={`tab-btn ${activeTab === 'tab-2' ? 'active-btn' : ''}`} 
              onClick={() => setActiveTab('tab-2')}
            >
              <i className="far fa-briefcase"></i>For Business
            </li>
          </ul>
          <div className="tabs-content">
            <div className={`tab ${activeTab === 'tab-1' ? 'active-tab' : ''}`} id="tab-1">
              <div className="row clearfix">
                {processSteps.map((step, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 processing-block" key={index}>
                    <div className="processing-block-one">
                      <div className="inner-box">
                        <span className="count-text">{step.count}</span>
                        <h3><Link to="/">{step.title}</Link></h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`tab ${activeTab === 'tab-2' ? 'active-tab' : ''}`} id="tab-2">
              <div className="row clearfix">
                {processSteps.map((step, index) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 processing-block" key={index}>
                    <div className="processing-block-one">
                      <div className="inner-box">
                        <span className="count-text">{step.count}</span>
                        <h3><Link to="/">{step.title}</Link></h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;