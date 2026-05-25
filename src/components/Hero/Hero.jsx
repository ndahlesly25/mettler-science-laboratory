import "./Hero.css";

import {
  motion,
} from "framer-motion";

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import banner6 from "../../assets/banner/banner6.png";
import banner7 from "../../assets/banner/banner7.png";

const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
];

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

export default function Hero({
  searchTerm,
  setSearchTerm,
}) {

  /* SEARCH FUNCTION */

  const handleSearch = () => {

  const firstMatch =
    document.querySelector(
      ".product-card"
    );

  if (firstMatch) {

    firstMatch.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  } else {

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }

  setTimeout(() => {

    setSearchTerm("");

  }, 500);

};

  return (

    <section
      className="hero"
      id="home"
    >

      {/* SLIDER */}

      <div className="slider">

        {images.map((image, index) => (

          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
              animationDelay: `${index * 5}s`,
            }}
          ></div>

        ))}

      </div>

      {/* OVERLAY */}

      <div className="hero-overlay">

        {/* FLOATING SEARCH */}

        <div className="hero-search">

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                handleSearch();

              }

            }}
          />

          <button
            onClick={handleSearch}
          >

            🔍

          </button>

        </div>

        <motion.div
          className="hero-content"

          initial="hidden"

          animate="show"

          variants={fadeUp}

          transition={{
            staggerChildren: 0.2,
          }}
        >

          {/* TITLE */}

          <motion.h1
            variants={fadeUp}
          >

            Mettler Science Laboratory

          </motion.h1>

          {/* SUBTITLE */}

          <motion.p
            variants={fadeUp}
          >

            Modern Laboratory Equipment For
            Chemistry, Biology, Physics,
            Geology & Professional Scientific
            Research Solutions

          </motion.p>

          {/* HIGHLIGHTS */}

          <motion.div
            className="hero-highlights"

            variants={fadeUp}
          >

            <span>
              ✔ Quality Equipment
            </span>

            <span>
              ✔ Fast Delivery
            </span>

            <span>
              ✔ Trusted Nationwide
            </span>

          </motion.div>

          {/* BUTTONS */}

          <motion.div
            className="hero-buttons"

            variants={fadeUp}
          >

            <a
              href="#products"
              className="shop-btn"
            >

              Shop Now

            </a>

            <a
              href="#contact"
              className="contact-btn"
            >

              Contact Us

            </a>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}