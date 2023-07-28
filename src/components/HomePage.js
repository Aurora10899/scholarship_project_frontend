// HomePage.js
import React from 'react';
import "../css/HomePage.css"

const HomePage = () => {
  return (
    <div>
      <main>
        <section className="hero-section">
          <h1>Welcome to the Unified Scholarship Portal!</h1>
          <br />
          <br />
          <p className="subtitle">Discover Opportunities, Achieve Your Dreams</p>
          <br />
          <br />
          <br />
          <p className="subtitle-content">At our Scholarship Portal, we are committed to empowering students like you with access to a wide range of scholarship opportunities, both nationally and internationally. Whether you are pursuing your education at the school, undergraduate, postgraduate, or doctoral level, we have scholarships to support your aspirations.</p>
          <br />
          <br />
          <br />
          <br />
          <h2>Why Choose Our Scholarship Portal?</h2>
          <br />
          <h5>Extensive Database: </h5>
          <p className="portal-points">Our platform curates an extensive database of national and international scholarships, ensuring that you can find scholarships that align with your academic pursuits and career goals.</p>
          <br />
          <h5>Search and Filters: </h5>
          <p className="portal-points">With our user-friendly search bar and advanced filters, finding the right scholarship has never been easier. Narrow down your options based on your preferred education level, field of study, location, and more.</p>
          <br />
          <h5>Up-to-Date Information: </h5>
          <p className="portal-points">Stay informed about the latest scholarship updates, approaching deadlines, and any changes in scholarship programs through our regularly updated content.</p>
          <br />
          <h5>Support and Guidance: </h5>
          <p className="portal-points">Our team is here to assist you throughout your scholarship application process. From providing application tips to answering your queries, we are dedicated to your success.</p>
        </section>
      </main>

    </div>
  );
};

export default HomePage;
