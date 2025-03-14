// src/components/Category.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import categorybg from '../assets/images/background/category-bg.jpg';
import category2 from "../assets/images/resource/category-2.jpg"

function Category() {
  return (
    <section className="category-section centred pt_120 pb_70">
      <div className="bg-box">
        <div className="bg-layer parallax-bg" style={{backgroundImage: `url(${categorybg})`}}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title light pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Category</span>
          <h2 className="title-animation">Researching Companies <br />Before Applying</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 category-block">
            <div className="category-block-one">
              <div className="inner-box">
                <h2>For Local Workers</h2>
                <p>Join over 1 million workers who use G1Careers to <br />find flexible and temp to hire</p>
                <Link to="/job-details" className="theme-btn btn-one">Find Work</Link>
                <figure className="image-box image-hov-one"><img src={categorybg} alt="" /></figure>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 category-block">
            <div className="category-block-one">
              <div className="inner-box">
                <h2>For Business Owner</h2>
                <p>Finding individuals who share your company's values and <br />vision can contribute</p>
                <Link to="/job-details" className="theme-btn btn-one">Find Employee</Link>
                <figure className="image-box image-hov-two"><img src={category2} alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;