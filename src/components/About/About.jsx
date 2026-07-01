import "./About.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

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

      <motion.div
        className="about-header"

        variants={fadeUp}

        initial="hidden"

        whileInView="show"

        viewport={{ once: true }}
      >

        <h2>
          About Mettler Company Limited
        </h2>

        <p>

          Mettler Company Ltd. is a trusted provider of
          scientific and medical laboratory equipment,
          chemicals, diagnostic instruments, hospital
          supplies, and educational science solutions.
          We support schools, universities, hospitals,
          health centres, research laboratories, and
          industrial institutions with quality products
          and reliable scientific solutions across
          Cameroon and beyond.

        </p>

        <Link
          to="/about"
          className="about-read-more"
        >

          Read More →

        </Link>

      </motion.div>

    </section>

  );

}