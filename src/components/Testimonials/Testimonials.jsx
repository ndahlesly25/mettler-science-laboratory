import "./Testimonials.css";

import {
  FaCheckCircle,
  FaTruck,
  FaTools,
} from "react-icons/fa";

export default function Testimonials() {

  const testimonials = [

    {
      icon: <FaCheckCircle />,

      title: "Premium Quality",

      text:
        "Supplying quality scientific and medical laboratory equipment, chemicals, diagnostic instruments and research materials for education and healthcare.",
    },

    {
      icon: <FaTruck />,

      title: "Nationwide Delivery",

      text:
        "Serving schools, universities, hospitals, health centres, research laboratories and industrial institutions across Cameroon with reliable products and nationwide delivery.",
    },

    {
      icon: <FaTools />,

      title: "Technical Support",

     text:
    "Customers benefit from free maintenance support and professional technical assistance when needed.",
    },

  ];

  return (

    <section className="testimonials">

      <div className="testimonials-header">

        <h2>
          Why Choose Mettler Company Ltd.
        </h2>

        <p>
          Delivering trusted scientific and medical laboratory
          solutions with quality, reliability and professional service.
        </p>

      </div>

      <div className="testimonials-grid">

        {testimonials.map(
          (item, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <div className="testimonial-icon">

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