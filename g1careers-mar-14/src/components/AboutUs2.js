// AboutUs.js
import React from 'react';
import about3 from '../assets/images/resource/about-3.jpg';
import about4 from '../assets/images/resource/about-4.jpg';
import about5 from '../assets/images/resource/about-5.jpg';
import about6 from '../assets/images/resource/about-6.jpg';
import ChooseUs from './ChooseUs';
import Industries from './Industries';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';
const AboutUs2 = () => {
  return (
    <div>
        
        <section class="page-title centred pt_110">
            <div class="auto-container">
                <div class="content-box">
                    <h1>About Us</h1>
                 
                </div>
            </div>
        </section>
    <section className="about-style-four pt_120 pb_120">
        
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-inner">
                <div className="image-box mr_15">
                  <figure className="image image-1 mb_15">
                    <img src={about3} alt="" />
                  </figure>
                  <figure className="image image-2">
                    <img src={about4} alt="" />
                  </figure>
                </div>
                <div className="image-box">
                  <figure className="image image-3 mb_15">
                    <img src={about5} alt="" />
                  </figure>
                  <figure className="image image-4">
                    <img src={about6} alt="" />
                  </figure>
                </div>
                <div className="support-box">
                  <div className="icon-box">
                    <i className="icon-28"></i>
                  </div>
                  <span>Online Support</span>
                  <h4>
                    <a href="tel:8123700851">+91 8123700851</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_five">
              <div className="content-box">
                <div className="sec-title pb_40 sec-title-animation animation-style2">
                  <span className="sub-title mb_10 title-animation">About us</span>
                  <h2 className="title-animation">
                    The most loved <span>Agency</span>
                  </h2>
                  <p className="title-animation">
                    Voted the fastest solution to implement the easiest to administer your employee & business.
                  </p>
                </div>
                <div className="inner-box clearfix">
                  {[
                    { icon: 'icon-29', title: 'Easiest Admin', subtitle: 'Fall 2023' },
                    { icon: 'icon-30', title: 'Users love Us', subtitle: 'Winter 2023' },
                    { icon: 'icon-31', title: 'Leader', subtitle: 'Winter 2023' },
                    { icon: 'icon-32', title: 'Best support', subtitle: 'Winter 2023' },
                  ].map((item, index) => (
                    <div className="single-item" key={index}>
                      <div className="icon-box">
                        <i className={item.icon}></i>
                      </div>
                      <h4>
                        <a href="job-details.html">{item.title}</a>
                      </h4>
                      <span>{item.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChooseUs/>
      <Industries/>
      <Testimonials/>

      <Subscribe/>
    </section>
    </div>
  );
};

export default AboutUs2;