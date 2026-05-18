import "./Contact.css";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {

  return (

    <section
      id="contact"
      className="contact-section"
    >

      {/* TITLE */}

      <div className="contact-header">

        <h2>
          Contact Us
        </h2>

        <p>
          Reach out to Mettler Science
          Laboratory for laboratory
          equipment, quotations,
          supplies, and inquiries.
        </p>

      </div>

      {/* CONTACT CONTENT */}

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="info-card">

            <FaPhoneAlt className="info-icon" />

            <div>

              <h3>Phone</h3>

              <p>
                +237 670 899 763
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaWhatsapp className="info-icon" />

            <div>

              <h3>WhatsApp</h3>

              <p>
                +237 670 899 763
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaEnvelope className="info-icon" />

            <div>

              <h3>Email</h3>

              <p>
                salesmettlercompanyltd@gmail.com
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaMapMarkerAlt className="info-icon" />

            <div>

              <h3>Location</h3>

              <p>
                Yaounde, Cameroon
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form-container">

            {/* GOOGLE MAP */}

<div className="map-container">

  <iframe
    title="Mettler Location"

    src="https://www.google.com/maps?q=Yaounde,Cameroon&output=embed"

    allowFullScreen=""

    loading="lazy"

    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

</div>



          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Your Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}