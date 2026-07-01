import "../components/About/About.css";

import {
  motion,
} from "framer-motion";

import {
  FaFlask,
  FaMicroscope,
  FaAward,
  FaUsers,
  FaGlobeAfrica,
  FaShippingFast,
  FaCheckCircle,
} from "react-icons/fa";

/* ANIMATION */

const fadeUp = {

  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },

};

export default function About() {

  return (

    <section
      id="about"
      className="about-section"
    >

      {/* HEADER */}

      <motion.div
        className="about-header"

        variants={fadeUp}

        initial="hidden"

        whileInView="show"

        viewport={{ once: true }}

        transition={{
          duration: 0.6,
        }}
      >

        <h2>
  Scientific & Medical Equipment Solutions
</h2>

<p>
  Mettler Company Ltd. is a trusted supplier of laboratory,
  medical, educational, and research equipment serving
  schools, universities, hospitals, medical laboratories,
  research institutions, and industries throughout Cameroon.
</p>

      </motion.div>

      {/* HIGHLIGHTS */}

      <motion.div
        className="about-highlights"

        initial="hidden"

        whileInView="show"

        viewport={{ once: true }}

        transition={{
          staggerChildren: 0.2,
        }}
      >

        <motion.div
          className="highlight-card"
          variants={fadeUp}
        >

          <h3>
            90%
          </h3>

          <p>
            Orders shipped within
            48 hours
          </p>

        </motion.div>

        

        <motion.div
          className="highlight-card"
          variants={fadeUp}
        >

          <h3>
            Nationwide
          </h3>

          <p>
            Supply coverage across
            Cameroon
          </p>

        </motion.div>

      </motion.div>

      {/* MAIN CONTENT */}

      <div className="about-container">

        {/* LEFT */}

        <motion.div
          className="about-text"

          variants={fadeUp}

          initial="hidden"

          whileInView="show"

          viewport={{ once: true }}

          transition={{
            duration: 0.7,
          }}
        >

          <h3>
    Supporting Science, Research & Healthcare
</h3>

          <p>

            Mettler Company Ltd. is one of
Cameroon's leading suppliers of
scientific, medical and laboratory
equipment, partnering with Irwin
Science Education to provide
world-class laboratory solutions
for education, healthcare and
research.
          </p>

          <p>

           We supply laboratory equipment,
medical diagnostic devices,
hospital furniture, laboratory
chemicals and scientific instruments
for Chemistry, Biology, Physics,
Geology, Medical Science and
research laboratories.

          </p>

          {/* IMPORTANT POINTS */}

          <div className="important-points">

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Retail & Bulk Supply Available
              </span>

            </div>

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Medical & Laboratory Equipment
              </span>

            </div>

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Trusted by Schools, Universities & Hospitals
              </span>

            </div>

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Nationwide Delivery & Technical Support
              </span>

            </div>

          </div>

          <p>

            From laboratory glassware, microscopes,
analytical balances and scientific chemicals
to hospital beds, centrifuges, patient monitors,
autoclaves, diagnostic instruments and medical
consumables, we provide complete solutions for
education, research, healthcare and industrial
laboratories.

          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-image"

          initial={{
            opacity: 0,
            x: 60,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{ once: true }}

          transition={{
            duration: 0.8,
          }}
        >

          <img
            src="https://janegoodall.org/wp-content/uploads/2026/05/3A2A1949-1024x683.jpg"
            alt="Science Laboratory"
          />

        </motion.div>

      </div>

      {/* FEATURES */}

      <motion.div
        className="about-features"

        initial="hidden"

        whileInView="show"

        viewport={{ once: true }}

        transition={{
          staggerChildren: 0.15,
        }}
      >

        <motion.div
          className="feature-card"
          variants={fadeUp}
        >

          <FaFlask className="feature-icon" />

          <h4>
            Scientific Equipment
          </h4>

          <p>
            Quality apparatus and chemicals
            for practical science education.
          </p>

        </motion.div>

        <motion.div
          className="feature-card"
          variants={fadeUp}
        >

          <FaMicroscope className="feature-icon" />

          <h4>
            Medical Equipment
          </h4>

          <p>
            Hospital equipment, diagnostic devices,
medical laboratory instruments and
healthcare solutions.
          </p>

        </motion.div>

        <motion.div
          className="feature-card"
          variants={fadeUp}
        >

          <FaShippingFast className="feature-icon" />

          <h4>
            Fast Delivery
          </h4>

          <p>
            Over 90% of products shipped
            within 48 hours for rapid supply.
          </p>

        </motion.div>

        <motion.div
          className="feature-card"
          variants={fadeUp}
        >

          <FaAward className="feature-icon" />

          <h4>
            Trusted Quality
          </h4>

          <p>
            Reliable educational laboratory
            products trusted by institutions.
          </p>

        </motion.div>

      </motion.div>

      {/* VISION & MISSION */}

      <motion.div
        className="vision-mission"

        initial="hidden"

        whileInView="show"

        viewport={{ once: true }}

        transition={{
          staggerChildren: 0.2,
        }}
      >

        {/* VISION */}

        <motion.div
          className="vision-card"
          variants={fadeUp}
        >

          <FaGlobeAfrica className="vm-icon" />

          <h3>
            Our Vision
          </h3>

          <ul>

            <li>
              Develop a comprehensive
              range of high-quality
              scientific laboratory
              equipment and services.
            </li>

            <li>
              Become Central Africa's trusted supplier of
scientific, medical and laboratory equipment.
            </li>

            <li>
              Continually expand our
              products to meet evolving
              client and institutional needs.
            </li>

          </ul>

        </motion.div>

        {/* MISSION */}

        <motion.div
          className="vision-card"
          variants={fadeUp}
        >

          <FaUsers className="vm-icon" />

          <h3>
            Our Mission
          </h3>

          <ul>

            <li>
              Provide reliable scientific,
medical and laboratory
solutions through quality
products and exceptional
customer service.
            </li>

            <li>
              Provide exceptional customer
              service through efficient
              operations and reliable
              delivery systems.
            </li>

            <li>
              Maintain high customer
              satisfaction through quality,
              professionalism, and trust.
            </li>

          </ul>

        </motion.div>

      </motion.div>

    </section>
  );
}