import "./Footer.css";

import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSchool,
  FaUniversity,
  FaHospital,
  FaIndustry,
} from "react-icons/fa";

import { GiMicroscope } from "react-icons/gi";
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
            Trusted supplier of scientific and medical
            laboratory equipment, chemicals,
            diagnostic instruments, hospital supplies
            and research solutions for schools,
            universities, hospitals and health
            centres across Cameroon.
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
              <a href="#medical-science">
                Medical Science
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

        {/* INDUSTRIES */}

<div className="footer-section">

  <h3>
    Industries We Serve
  </h3>

  <ul>

    <li>

      <FaSchool className="footer-icon" />

      Schools

    </li>

    <li>

      <FaUniversity className="footer-icon" />

      Universities

    </li>

    <li>

      <FaHospital className="footer-icon" />

      Hospitals

    </li>

    <li>

      <FaHospital className="footer-icon" />

      Health Centres

    </li>

    <li>

      <GiMicroscope className="footer-icon" />

      Research Laboratories

    </li>

    <li>

      <FaIndustry className="footer-icon" />

      Industrial Laboratories

    </li>

  </ul>

</div>

        {/* CONTACT */}

        <div className="footer-section">

          <h3>
            Contact Us
          </h3>

          <p>

            📍 Yaoundé & Buea,
                Cameroon

          </p>

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
         Serving Education, Healthcare & Research.
          All Rights Reserved.

      </div>

    </footer>

  );

};

export default Footer;