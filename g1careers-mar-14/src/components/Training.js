import React, { useState } from "react";
import service9 from '../assets/images/service/service-9.jpg';
import service8 from '../assets/images/service/service-8.jpg';

const Training = () => {
    const [activeTab, setActiveTab] = useState("tab-1");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
             <section class="page-title centred pt_110">
            <div class="auto-container">
                <div class="content-box">
                    <h1>Training Session</h1>
                   
                </div>
            </div>
        </section>
        <section className="service-details pt_110 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                   
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="service-details-content">
                            <div className="sec-title mb_70">
                                <span className="sub-title mb_10">Training Session</span>
                                <h2>The Executive Search Process for Optimal Results</h2>
                                <p className="mt_20">The executive search process is meticulously designed to identify and attract top-tier leadership talent that aligns with an organization's strategic goals.</p>
                            </div>
                            <figure className="image-box mb_30">
                                <img src={service9} alt="Executive search process illustration" />
                            </figure>
                            <div className="text-box mb_110">
                                <p className="mb_25">It begins with a thorough understanding of the company's needs, culture, and long-term vision, ensuring that the search is precisely targeted.</p>
                                <p>Leveraging an extensive network and advanced assessment tools, executive search firms meticulously evaluate candidates' qualifications, experience, and leadership capabilities. The process includes rigorous interviews, reference checks, and often psychometric testing to ensure a comprehensive evaluation.</p>
                            </div>
                            <div className="text-box mb_70">
                                <h2>Finding You The Leaders Of Tomorrow</h2>
                                <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                            </div>
                            <div className="tabs-box mb_50">
                                <ul className="tab-btns tab-buttons">
                                    <li 
                                        className={`tab-btn ${activeTab === "tab-1" ? "active-btn" : ""}`} 
                                        onClick={() => handleTabClick("tab-1")}
                                    >
                                        <i className="icon-43"></i>Short Time Hiring
                                    </li>
                                    <li 
                                        className={`tab-btn ${activeTab === "tab-2" ? "active-btn" : ""}`} 
                                        onClick={() => handleTabClick("tab-2")}
                                    >
                                        <i className="icon-43"></i>Last Minute Hiring
                                    </li>
                                    <li 
                                        className={`tab-btn ${activeTab === "tab-3" ? "active-btn" : ""}`} 
                                        onClick={() => handleTabClick("tab-3")}
                                    >
                                        <i className="icon-43"></i>Immediate Hiring
                                    </li>
                                </ul>
                                <div className="tabs-content">
                                    <div className={`tab ${activeTab === "tab-1" ? "active-tab" : ""}`} id="tab-1">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src={service8} alt="Short Time Hiring" />
                                            </figure>
                                            <div className="content-box">
                                                <h6>Short Time Hiring</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur. Consequat tellus proin massa lacus. Arcu ullamcorper proin urna rhoncus odio</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === "tab-2" ? "active-tab" : ""}`} id="tab-2">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src={service8} alt="Last Minute Hiring" />
                                            </figure>
                                            <div className="content-box">
                                                <h6>Last Minute Hiring</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur. Consequat tellus proin massa lacus. Arcu ullamcorper proin urna rhoncus odio</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab ${activeTab === "tab-3" ? "active-tab" : ""}`} id="tab-3">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <img src={service8} alt="Immediate Hiring" />
                                            </figure>
                                            <div className="content-box">
                                                <h6>Immediate Hiring</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur. Consequat tellus proin massa lacus. Arcu ullamcorper proin urna rhoncus odio</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-box">
                                <p className="mb_25">Lorem ipsum dolor sit amet consectetur. Mi luctus at sapien viverra enim pharetra augue. Aliquam tellus amet est amet in non sem adipiscing urna. Neque etiam eu pellentesque velit ultricies dictumst mauris tortor hac.</p>
                                <p>Elit morbi maecenas sit viverra nibh elementum bibendum arcu a. Suscipit magna vitae nulla aenean suspendisse scelerisque montes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Training;