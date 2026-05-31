import "./Footer.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY INFO */}

        <div className="footer-section">

          <h2>
            Mettler Company Limited
          </h2>

          <p>
            Professional supplier of chemistry,
            biology, physics and geology
            laboratory equipment, chemicals
            and scientific solutions.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-section">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <a href="/">
                Home
              </a>
            </li>

            <li>
              <a href="#chemistry">
                Chemistry
              </a>
            </li>

            <li>
              <a href="#biology">
                Biology
              </a>
            </li>

            <li>
              <a href="#physics">
                Physics
              </a>
            </li>

            <li>
              <a href="#geology">
                Geology
              </a>
            </li>

          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-section">

          <h3>
            Contact Us
          </h3>

          <p>

            <FaWhatsapp className="footer-icon" />

            +237 670 899 763

          </p>

          <p>

            <FaPhoneAlt className="footer-icon" />

            +237 670 899 763

          </p>

          <p>

            <FaEnvelope className="footer-icon" />

            salesmettlercompanyltd@gmail.com

          </p>

        </div>

        {/* LEGAL */}

        <div className="footer-section">

          <h3>
            Legal
          </h3>

          <ul>

            <li>
              <Link to="/faq">
                FAQs
              </Link>
          </li>

           <li>
              <Link to="/maintenance">
                  Maintenance Request
              </Link>
        </li>

            <li>
              <Link to="/terms">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link to="/privacy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/cookies">
                Cookie Policy
              </Link>
            </li>

            <li>
              <Link to="/shipping">
                Shipping Policy
              </Link>
            </li>

            <li>
              <Link to="/returns">
                Returns & Refund Policy
              </Link>
           </li>

          </ul>

        </div>

        {/* SOCIALS */}

        <div className="footer-section">

          <h3>
            Follow Us
          </h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        © 2026 Mettler Company Limited.
        All Rights Reserved.

      </div>

    </footer>

  );

};

export default Footer;