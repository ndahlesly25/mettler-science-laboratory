import "./Footer.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY INFO */}

        <div className="footer-section">

          <h2>
            Mettler Science Laboratory
          </h2>

          <p>
            Professional supplier of chemistry,
            biology, physics, and geology
            laboratory equipment.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-section">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <a href="#">
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

        © 2026 Mettler Science Laboratory.
        All Rights Reserved.

      </div>

    </footer>

  );
};

export default Footer;