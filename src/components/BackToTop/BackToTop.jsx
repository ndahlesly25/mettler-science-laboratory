import "./BackToTop.css";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 600) {

        setVisible(true);

      } else {

        setVisible(false);

      }

    };

    window.addEventListener(
      "scroll",
      toggleVisibility
    );

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );

  }, []);

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <button
      className={`back-to-top ${
        visible ? "show" : ""
      }`}
      onClick={scrollToTop}
    >

      <FaArrowUp />

    </button>

  );

}