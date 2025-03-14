import React from 'react';
import WelcomeSection from './WelcomeSection';
import Subscribe from './Subscribe';
import welcome1 from '../assets/images/resource/welcome-1.jpg';
import welcome2 from '../assets/images/resource/welcome-2.jpg';
const JobBlock = ({ job }) => (
  <div className="job-block-one">
    <div className="upper-box">
      <ul className="job-info">
        <li><i className="icon-43"></i>Posted by <span>{job.posted}</span></li>
        <li>Job Code: <span>{job.code}</span></li>
      </ul>
    </div>
    <div className="inner-box">
      <div className="title-box">
        <div className="icon-box"><i className="icon-44"></i></div>
        <h3>{job.title}</h3>
        <span>{job.location}</span>
      </div>
      <div className="salary-box">
        <h5>Salary</h5>
        <span>{job.salary}</span>
      </div>
      <div className="experience-box">
        <h5>Experience Needed</h5>
        <span>{job.experience}</span>
      </div>
      {/* <div className="btn-box">
        <a href="/JobDetails" className="theme-btn btn-one">View Details</a>
      </div> */}
    </div>
  </div>
);

const JobSection = ({ title, subtitle, jobs = [] }) => {
  return (
    <div>
      <section className="page-title centred pt_110">
        <div className="auto-container">
          <div className="content-box">
            <h1>Job Openings</h1>
            <ul className="bread-crumb clearfix">
              <li><a href="index-2.html">Home</a></li>
              <li>-</li>
              <li>Job Openings</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="job-section pt_110 pb_90">
        <div className="auto-container">
          <div className="sec-title centred pb_60 sec-title-animation animation-style2">
            <span className="sub-title mb_10 title-animation">{subtitle}</span>
            <h2 className="title-animation">{title}</h2>
          </div>
          <div className="inner-container">
            {jobs && jobs.length > 0 ? (
              jobs.map((job, index) => (
                <JobBlock key={index} job={job} />
              ))
            ) : (
              <p>No job listings available at this time.</p>
            )}
          </div>
        </div>
      </section>
      <WelcomeSection
  title="Modern Day Staffing Agency"
  subtitle="Welcome to JobAway"
  tabs={[
    {
      id: "tab-3",
      label: "For Talents",
      icon: "far fa-user",
      content: {
        title: "An Award Winning Hiring Agency for",
        highlight: "12 years",
        description: "Voted the fastest solution to implement the easiest to administer your employee & business.",
        awards: [
          { title: "Easiest Admin", link: "job-details.html", icon: "icon-29", date: "Fall 2023" },
          { title: "Users Love Us", link: "job-details.html", icon: "icon-30", date: "Winter 2023" },
        ],
        images: [welcome1, welcome2],
        experience: { years: "12", text: "Year of Experience" },
        support: { phone: "+912 (556) 889" }
      }
    },
    // Add "For Business" tab here
  ]}
/>      <Subscribe/>
    </div>
  );
};

export default JobSection;