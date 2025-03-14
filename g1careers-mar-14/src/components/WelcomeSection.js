import React, { useState, useEffect } from 'react';

const WelcomeSection = ({ title, subtitle, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs && tabs.length > 0 ? tabs[0].id : null);

  useEffect(() => {
    if (tabs && tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs]);

  if (!tabs || tabs.length === 0) {
    return <p>No tabs available.</p>;
  }

  return (
    <section className="welcome-section alternat-2 pt_0 pb_120">
      <div className="shape">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">{subtitle}</span>
          <h2 className="title-animation">{title}</h2>
        </div>
        <div className="tabs-box">
          <ul className="tab-btns tab-buttons">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active-btn' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                data-tab={`#${tab.id}`}
              >
                <i className={tab.icon}></i>{tab.label}
              </li>
            ))}
          </ul>
          <div className="tabs-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`}
                id={tab.id}
              >
                <div className="inner-container">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <div className="text-box mb_40">
                          <h2>{tab.content.title} <span>{tab.content.highlight}</span></h2>
                          <p>{tab.content.description}</p>
                        </div>
                        <div className="inner-box clearfix">
                          {tab.content.awards.map((award, index) => (
                            <div key={index} className="single-item">
                              <div className="icon-box"><i className={award.icon}></i></div>
                              <h3><a href={award.link}>{award.title}</a></h3>
                              <span>{award.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image_block_one">
                        <div className="image-box pl_65">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="single-item">
                                <figure className="image-1 mb_16 image-hov-one">
                                  <img src={tab.content.images[0]} alt="" />
                                </figure>
                                <div className="experience-box">
                                  <h3>{tab.content.experience.years}</h3>
                                  <h4>{tab.content.experience.text}</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                              <div className="single-item">
                                <div className="support-box">
                                  <div className="icon-box"><i className="icon-28"></i></div>
                                  <span>Online Support</span>
                                  <h4><a href={`tel:${tab.content.support.phone}`}>{tab.content.support.phone}</a></h4>
                                </div>
                                <figure className="image-2 mt_16 image-hov-two">
                                  <img src={tab.content.images[1]} alt="" />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default WelcomeSection;