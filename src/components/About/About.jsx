import "./About.css";

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
          About Mettler Company Ltd.
        </h2>

        <p>
          Trusted supplier of laboratory
          equipment, chemicals, and
          educational science solutions
          for schools, colleges, hospitals,
          and research institutions in
          Cameroon and beyond.
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
            100+
          </h3>

          <p>
            Laboratory products
            available
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
            Excellence In Science Education
          </h3>

          <p>

            Mettler Company Ltd. is one of
            Cameroon’s leading suppliers of
            school science equipment and
            laboratory chemicals, proudly
            partnering with Irwin Science
            Education — a global leader in
            science education solutions.

          </p>

          <p>

            We provide affordable,
            high-quality laboratory
            equipment for Biology,
            Chemistry, Physics, and
            Geology practicals for schools,
            colleges, universities, and
            professional laboratories.

          </p>

          {/* IMPORTANT POINTS */}

          <div className="important-points">

            <div className="important-item">

              <FaCheckCircle />

              <span>
                No minimum order policy
              </span>

            </div>

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Chemicals available in
                retail quantities
              </span>

            </div>

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Trusted by educational
                institutions
              </span>

            </div>

            <div className="important-item">

              <FaCheckCircle />

              <span>
                Reliable nationwide delivery
              </span>

            </div>

          </div>

          <p>

            From analytical balances,
            microscopes, glassware,
            molecular models, laboratory
            safety equipment, and scientific
            apparatus to chemicals in both
            bulk and smaller retail
            quantities, we supply everything
            required to establish, improve,
            and modernize science
            laboratories with quality,
            innovation, and care.

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
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557"
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
            Laboratory Equipment
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
            Modern Science Solutions
          </h4>

          <p>
            Supporting schools and
            laboratories with innovative
            scientific tools and materials.
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
              Become a leading provider
              of innovative educational
              science solutions globally.
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
              Deliver curriculum-based
              science solutions for
              educators nationwide.
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