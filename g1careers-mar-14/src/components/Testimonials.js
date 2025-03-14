// Testimonials.js
import React from 'react';
import testmonial1 from '../assets/images/resource/testimonial-1.png';
import testmonial3 from '../assets/images/resource/testimonial-3.png';  
import shape17 from '../assets/images/shape/shape-17.png'
import icons11 from '../assets/images/icons/icon-11.png'
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Evan Clement',
      designation: 'HR Assistant, NFL',
      text: 'Company and was impressed by the personalized approach of their recruitment team. They kept me informed at every stage and ensured that I had all the information I needed to succeed.',
      image: testmonial1,
    },
    {
      name: 'Maharan Depaak',
      designation: 'CEO, Amaban',
      text: 'Recently I went through their recruitment process with Jobaway Company, and I was impressed by how the smooth and efficient these were.',
      image: testmonial3,
    },
  ];

  return (
    <section className="testimonial-style-two pt_70 pb_120">
      <div className="pattern-layer" style={{ backgroundImage: `url(${shape17})` }}></div>
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Testimonials</span>
          <h2 className="title-animation">Love From Users</h2>
        </div>
        <div className="two-item-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-block-two" key={index}>
              <div className="inner-box">
                <div className="icon-box">
                  <img src={icons11} alt="" />
                </div>
                <div className="author-box">
                  <figure className="thumb-box">
                    <img src={testimonial.image} alt="" />
                  </figure>
                  <h4>{testimonial.name}</h4>
                  <span className="designation">{testimonial.designation}</span>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;