// src/components/About.jsx
import React from 'react';
import video3 from '../assets/images/resource/video-3.jpg';
import video2 from '../assets/images/resource/video-2.jpg';
import video1 from '../assets/images/resource/video-1.jpg';
function About() {
  return (
    <section className="about-section pt_120 pb_120">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 video-column">
            <div className="video_block_one">
              <div className="video-box p_relative pt_40 pb_40 pl_30 centred">
                <div className="image-layer">
                  <figure className="image-1"><img src={video3} alt="" /></figure>
                  <figure className="image-2"><img src={video2} alt="" /></figure>
                </div>
                <div className="video-inner" style={{backgroundImage: `url(${video1})`}}>
                  <div className="video-content">
                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image video-btn">
                      <i className="icon-8"></i>
                    </a>
                    <h6>Watch Video</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_one">
              <div className="content-box ml_80">
                <div className="sec-title pb_20 sec-title-animation animation-style2">
                  <span className="sub-title mb_10 title-animation">About us</span>
                  <h2 className="title-animation">The Leading Hospitality Staffing <span>Platform</span></h2>
                </div>
                <div className="text-box">
                  <p>This staffing platform provides access to a diverse pool of qualified candidates.</p>
                  <ul className="list-style-one clearfix">
                    <li>This helps businesses maintain service excellence</li>
                    <li>This scalability allows businesses to adjust staffing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;