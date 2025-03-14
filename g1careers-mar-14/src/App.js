// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Clients from './components/Clients';
import About from './components/About';
import FunFact from './components/FunFact';
import ContactPage from './components/ContactPage';
import ChooseUs from './components/ChooseUs';
import Category from './components/Category';
import Industries from './components/Industries';
import Process from './components/Process';
import Team from './components/Team';
import News from './components/News';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import SlideText from './components/SlideText';
import AboutUs2 from './components/AboutUs2';
import Training from './components/Training';
import './App.css';
import JobDetails from './components/JobDetails';
import JobSection from './components/JobSection';
import JobApplicationForm from './components/JobApplication';
import LoginPage from './components/Login';
function App() {
  const jobData = [
    {
      title: "Software Engineer",
      location: "San Francisco, California",
      posted: "6 months ago",
      code: "0222512",
      salary: "$200 - $300 Per Month",
      experience: "2 - 3 Yrs",
      detailsLink: "job-details.html"
    },
    {
      title: "Frontend Developer",
      location: "New York, NY",
      posted: "2 months ago",
      code: "0222513",
      salary: "$250 - $350 Per Month",
      experience: "1 - 2 Yrs",
      detailsLink: "job-details.html"
    }
    // Add more jobs as needed
  ];
  console.log('App component rendered');
  return (
    <Router>
      <div className="boxed_wrapper ltr">
        <Header />
        <Routes>
          <Route path="/about2" element={<AboutUs2 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/training" element={<Training />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/job-openings" element={ <JobSection
      title="Find Your Job"
      subtitle="Posted Jobs"
      jobs={jobData}
    />} />
          <Route path="/job-apply" element={<JobApplicationForm />} />
          <Route path="/jobDetails" element={<JobDetails />} />
          <Route path="/" exact element={
            <>
              <Banner />
              <Clients />
              <About />
              <FunFact />
              <SlideText />
              <ChooseUs />
              <Category />
              <Industries />
              <Process />
              <Team />
              <News />
              <Subscribe />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;