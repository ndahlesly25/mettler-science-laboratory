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
          About Mettler.
        </h2>

        <p>

          Mettler Company Ltd. is a trusted
          supplier of laboratory equipment,
          chemicals, educational science
          solutions, and research materials
          serving schools, colleges,
          universities, hospitals, and
          laboratories throughout Cameroon
          and beyond.

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