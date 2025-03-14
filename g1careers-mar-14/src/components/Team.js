// src/components/Team.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import team1 from '../assets/images/team/team-1.jpg';
import team2 from '../assets/images/team/team-2.jpg';
import team3 from '../assets/images/team/team-3.jpg';
import team4 from '../assets/images/team/team-4.jpg';
import team5 from '../assets/images/team/team-5.jpg';
import team6 from '../assets/images/team/team-6.jpg';
import team7 from '../assets/images/team/team-7.jpg';

function Team() {
  const teamMembers = [
    { name: 'Tom Oliver', role: 'Founder', image: team1 },
    { name: 'Loenard Barnes', role: 'Lead Engineer', image: team2 },
    { name: 'Gilbert Sherman', role: 'Sale Manager', image: team3 },
    { name: 'Franklin Bailey', role: 'Art Director', image: team4 },
    { name: 'Antonio Alex', role: 'Lead Engineer', image: team5 },
    { name: 'Diarmuid Eoin', role: 'Sale Manager', image: team6 },
    { name: 'Ashitaka Dai', role: 'Art Director', image: team7 }
  ];

  return (
    <section className="team-section centred pt_120 pb_70">
      <div className="auto-container">
        <div className="sec-title pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Our Team</span>
          <h2 className="title-animation">Meet The Team</h2>
        </div>
        <div className="row clearfix">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 team-block" key={index}>
              <div className="team-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><img src={member.image} alt={member.name} /></figure>
                  </div>
                  <div className="lower-content">
                    <h3><Link to="/">{member.name}</Link></h3>
                    <span className="designation">{member.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lower-box">
          <div className="row clearfix">
            {teamMembers.slice(4).map((member, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 team-block" key={index}>
                <div className="team-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src={member.image} alt={member.name} /></figure>
                    </div>
                    <div className="lower-content">
                      <h3><Link to="/">{member.name}</Link></h3>
                      <span className="designation">{member.role}</span>
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
}

export default Team;