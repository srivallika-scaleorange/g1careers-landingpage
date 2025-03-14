// src/components/News.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import news1 from '../assets/images/news/news-1.jpg';
import news2 from '../assets/images/news/news-2.jpg';
import news3 from '../assets/images/news/news-3.jpg';

function News() {
  const newsItems = [
    { date: 'March 20, 2023', title: 'Create a series of blog posts discussing common interview', image: news1 },
    { date: 'March 19, 2023', title: 'Explore the concept of personal branding and its impact on', image: news2 },
    { date: 'March 18, 2023', title: 'Feature interviews with employees from top companies', image: news3 }
  ];

  return (
    <section className="news-section pb_90">
      <div className="auto-container">
        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
          <span className="sub-title mb_10 title-animation">Media</span>
          <h2 className="title-animation">Latest News</h2>
        </div>
        <div className="row clearfix">
          {newsItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 news-block" key={index}>
              <div className="news-block-one">
                <div className="inner-box">
                  <div className="bg-layer" style={{backgroundImage: `url(${item.image})`}}></div>
                  <div className="overlay-bg-layer" style={{backgroundImage: `url(${item.image})`}}></div>
                  <div className="content-box">
                    <span className="post-date">{item.date}</span>
                    <h4><Link to="/blog-details">{item.title}</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;