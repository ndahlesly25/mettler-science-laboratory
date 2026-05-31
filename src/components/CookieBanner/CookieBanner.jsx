import "./CookieBanner.css";

import { Link } from "react-router-dom";
import { FaCookieBite } from "react-icons/fa";
import { useState } from "react";
export default function CookieBanner() {

 const [showBanner, setShowBanner] =
  useState(() => {

    if (
      typeof window === "undefined"
    ) {
      return false;
    }

    return !localStorage.getItem(
      "cookiesAccepted"
    );

  });

  const acceptCookies = () => {

    localStorage.setItem(
      "cookiesAccepted",
      "true"
    );

    setShowBanner(false);

  };

  const declineCookies = () => {

    localStorage.setItem(
      "cookiesAccepted",
      "false"
    );

    setShowBanner(false);

  };

  if (!showBanner) return null;

  return (

    <div className="cookie-banner">

      <div className="cookie-content">

        <div className="cookie-text">

          <FaCookieBite
            className="cookie-icon"
          />

          <p>

            We use cookies to improve website
            performance, personalize content
            and enhance your browsing experience.

          </p>

        </div>

        <div className="cookie-buttons">

          <button
            className="accept-btn"
            onClick={acceptCookies}
          >
            Accept
          </button>

          <button
            className="decline-btn"
            onClick={declineCookies}
          >
            Decline
          </button>

          <Link
            to="/cookies"
            className="learn-btn"
          >
            Learn More
          </Link>

        </div>

      </div>

    </div>

  );

}