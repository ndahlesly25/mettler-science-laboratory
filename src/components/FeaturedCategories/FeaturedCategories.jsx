import "./FeaturedCategories.css";

import {
  FaMicroscope,
  FaFlask,
  FaBalanceScale,
  FaShieldAlt,
} from "react-icons/fa";

export default function FeaturedCategories() {

  const categories = [

    {
      icon: <FaMicroscope />,
      title: "Microscopes",
      text:
        "Professional microscopes for schools, colleges and laboratories.",
    },

    {
      icon: <FaFlask />,
      title: "Laboratory Chemicals",
      text:
        "Educational and research chemicals in retail and bulk quantities.",
    },

    {
      icon: <FaBalanceScale />,
      title: "Electronic Balances",
      text:
        "Accurate weighing solutions for scientific applications.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Safety Equipment",
      text:
        "Protective laboratory supplies and safety accessories.",
    },

  ];

  return (

    <section className="featured-categories">

      <div className="featured-header">

        <h2>
          Most Popular Laboratory Supplies
        </h2>

        <p>
          Frequently requested products by schools,
          universities, hospitals and laboratories.
        </p>

      </div>

      <div className="featured-grid">

        {categories.map(
          (item, index) => (

            <div
              className="featured-card"
              key={index}
            >

              <div className="featured-icon">

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