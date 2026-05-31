import "./CookieBanner.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function CookieBanner() {

  const [showBanner, setShowBanner] =
    useState(false);

  useEffect(() => {

    const accepted =
      localStorage.getItem(
        "cookiesAccepted"
      );

    if (!accepted) {

      setShowBanner(true);

    }

  }, []);

  const acceptCookies = () => {

    localStorage.setItem(
      "cookiesAccepted",
      "true"
    );

    setShowBanner(false);

  };

  if (!showBanner) return null;

  return (

    <div className="cookie-banner">

      <div className="cookie-content">

        <p>

          We use cookies to improve
          your experience, analyze
          website traffic and enhance
          our services.

        </p>

        <div className="cookie-buttons">

          <button
            onClick={acceptCookies}
          >
            Accept
          </button>

          <Link
            to="/cookies"
          >
            Learn More
          </Link>

        </div>

      </div>

    </div>

  );

}