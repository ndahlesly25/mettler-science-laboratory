import "./WhyChoose.css";

import {
  FaFlask,
  FaTruck,
  FaAward,
  FaUsers,
  FaBoxes,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChoose() {

  const features = [

    {
      icon: <FaFlask />,
      title: "Quality Laboratory Products",
      text:
        "Reliable laboratory equipment, chemicals and scientific supplies.",
    },

    {
      icon: <FaTruck />,
      title: "Nationwide Delivery",
      text:
        "Fast and dependable delivery across Cameroon.",
    },

    {
      icon: <FaAward />,
      title: "Trusted Quality",
      text:
        "Products selected to meet educational and laboratory standards.",
    },

    {
      icon: <FaUsers />,
      title: "Institution Trusted",
      text:
        "Serving schools, colleges, universities and laboratories.",
    },

    {
      icon: <FaBoxes />,
      title: "Retail & Bulk Orders",
      text:
        "Available in both small and large quantities.",
    },

    {
      icon: <FaHeadset />,
      title: "Professional Support",
      text:
        "Friendly assistance before and after purchase.",
    },

  ];

  return (

    <section className="why-choose">

      <div className="why-header">

        <h2>
          Why Choose Mettler Company Ltd.
        </h2>

        <p>
          Delivering quality scientific solutions
          with professionalism, reliability and care.
        </p>

      </div>

      <div className="why-grid">

        {features.map(
          (item, index) => (

            <div
              className="why-card"
              key={index}
            >

              <div className="why-icon">

                {item.icon}

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          )
        )}

      </div>

    </section>

  );

}