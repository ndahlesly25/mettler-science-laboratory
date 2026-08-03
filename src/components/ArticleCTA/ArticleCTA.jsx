import "./ArticleCTA.css";
import { FaWhatsapp } from "react-icons/fa";

export default function ArticleCTA() {

  return (

    <div className="article-cta">

      <h2>

        Need Laboratory Equipment?

      </h2>

      <p>

        Mettler Company Limited supplies laboratory equipment,
        laboratory chemicals, glassware, microscopes,
        medical laboratory instruments and educational science
        materials for schools, colleges, universities,
        hospitals and research institutions throughout Cameroon.

      </p>

      <p>

        Whether you are establishing a new laboratory
        or upgrading an existing one,
        our team is ready to help you choose
        the right equipment for your institution.

      </p>

      <a

        href="https://wa.me/237670899763?text=Hello%20Mettler%20Company%20Limited,%20I%20would%20like%20to%20request%20a%20quotation%20for%20laboratory%20equipment."

        target="_blank"

        rel="noopener noreferrer"

        className="cta-button"

      >

        <FaWhatsapp />

        Request a Quote on WhatsApp

      </a>

    </div>

  );

}