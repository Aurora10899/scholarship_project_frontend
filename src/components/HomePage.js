import React from 'react';
import "../css/HomePage.css"
import NationalCard from './NationalCard';
import InternationalCard from './InternationalCard';
import database from "../images/nosql-database.png";
import searchfill from "../images/searchfill.png";
import uptodate from "../images/uptodate.png";
import support from "../images/Support.png";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="scholarship-card-grid">
        <h2 className="card-heading">Most Applied National Scholarships</h2>
        <NationalCard />
      </div>
      <div className="scholarship-card-grid">
        <h2 className="card-heading">Most Applied International Scholarships</h2>
        <InternationalCard />
      </div>
      <div className="wbDetail">
        <div className="wbDetail-card">
          <img src={database} alt="" />
          <p>Our platform curates an extensive database of national and international scholarships, ensuring that you can find scholarships that align with your academic pursuits and career goals.</p>
        </div>
        <div className="wbDetail-card">
          <img src={searchfill} alt="" />
          <p>With our user-friendly search bar and advanced filters, finding the right scholarship has never been easier. Narrow down your options based on your preferred education level, field of study, location, and more.</p>
        </div>
        <div className="wbDetail-card">
          <img src={uptodate} alt="" />
          <p>Stay informed about the latest scholarship updates, approaching deadlines, and any changes in scholarship programs through our regularly updated content.</p>
        </div>
        <div className="wbDetail-card">
          <img src={support} alt="" />
          <p>Our team is here to assist you throughout your scholarship application process. From providing application tips to answering your queries, we are dedicated to your success.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
