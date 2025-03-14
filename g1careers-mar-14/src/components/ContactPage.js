import React from 'react';

import Header from './Header';
import Subscribe from './Subscribe';
// ContactSection Componentimport React from 'react';
import icon27 from '../assets/images/icons/icon-27.png';
import icon28 from '../assets/images/icons/icon-28.png';
import icon29 from '../assets/images/icons/icon-29.png';

const ContactSection = () => {
  return (
    <div>
    <section class="page-title centred pt_110">
            <div class="auto-container">
                <div class="content-box">
                    <h1>Contact us</h1>
                    
                </div>
            </div>
        </section>
    <section className="contact-section pt_110 pb_30">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
              <div className="info-box">
                <h3>Contact Information</h3>
                <div className="single-item">
                  <div className="icon-box">
                    <img src={icon27} alt="Corporate Office Icon" />
                  </div>
                  <h4>Corporate Office</h4>
                  <p>ScaleOrange Technologies</p>
                </div>
                <div className="single-item">
                  <div className="icon-box">
                    <img src={icon27} alt="Main Warehouse Icon" />
                  </div>
                  <h4> 3rd Floor, Ratnam Chambers</h4>
                  <p>Phase - II, H.No.1-62/172, Plot No.172, Kavuri Hills, Madhapur, Telangana 500081</p>
                </div>
                <div className="single-item">
                  <div className="icon-box">
                    <img src={icon28} alt="Email Icon" />
                  </div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:delivery@g1careers.com">delivery@g1careers.com</a>
                    <br />
                    <a href="mailto:abhishek@scaleorange.com">abhishek@scaleorange.com</a>
                  </p>
                </div>
                <div className="single-item">
                  <div className="icon-box">
                    <img src={icon29} alt="Phone Icon" />
                  </div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:8123700851">+91 8123700851</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
              <div className="form-inner">
                <form
                  method="post"
                  action="https://azim.hostlin.com/Jobaway/sendemail.php"
                  id="contact-form"
                >
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>
                        Name <span>*</span>
                      </label>
                      <input type="text" name="username" placeholder="" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>
                        Phone <span>*</span>
                      </label>
                      <input type="text" name="phone" placeholder="" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>
                        Email Address <span>*</span>
                      </label>
                      <input type="email" name="email" placeholder="" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>
                        Subject <span>*</span>
                      </label>
                      <input type="text" name="subject" placeholder="" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>
                        Write Message <span>*</span>
                      </label>
                      <textarea name="message" placeholder=""></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button type="submit" className="theme-btn btn-one" name="submit-form">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};


// GoogleMap Component
const GoogleMap = () => (
    <section className="google-map pb_80">
      <div className="auto-container">
        <div className="inner-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7617.009439024707!2d78.3745698!3d17.4367038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005a8f956b%3A0xe52dbe451cf10df5!2sDoctors%20Colony%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1694932800000!5m2!1sen!2sin"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0, width: '100%' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
  
  
  
  




// Main ContactPage Component
const ContactPage = () => {
  return (
    <div className="boxed_wrapper ltr">
      <Header />
      <ContactSection />
      <GoogleMap />
      <Subscribe/>
      <div className="scroll-to-top">
        <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default ContactPage;