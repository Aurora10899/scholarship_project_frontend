// components/Footer.js
import React from 'react';
import "../css/Footer.css"
import tweet from "../images/twitter.png"
import fbook from "../images/facebook.png"
import insta from '../images/instagram.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <div className='link-content'>
            <h4>ABOUT US</h4>
            <br />
            <p>we are committed to empowering students like you with access to a wide range of scholarship opportunities, both nationally and internationally. Whether you are pursuing your education at the school, undergraduate, postgraduate, or doctoral level, we have scholarships to support your aspirations.</p>
          </div>
          <div className='link-content-mid'>
            <div className='social-contacts'>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={tweet} alt="twitter"/></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={fbook} alt="facebook"/></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram"/></a>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Unified Scholarship Portal.</p>
              <p>All rights reserved.</p>
              {/* Add any additional information or disclaimers */}
            </div>
          </div>
          <div className='link-content'>
            <h4>CONTACT US</h4>
            <br />
            <p>+91 94335 48642</p>
            <p>aniketpal621@gmail.com</p>
            <br />
            <p>+91 7003048163</p>
            <p>aniketkolkata24@gmail.com</p>
            <br />
            <a href="/messageUs">MESSAGE US</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
