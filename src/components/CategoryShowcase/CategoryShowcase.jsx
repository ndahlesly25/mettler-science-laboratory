import "./CategoryShowcase.css";

import {
  FaFlask,
  FaMicroscope,
  FaAtom,
} from "react-icons/fa";

import { GiCrystalGrowth } from "react-icons/gi";

export default function CategoryShowcase() {

  const categories = [

    {
      icon: <FaFlask />,
      title: "Chemistry",
      link: "#chemistry",
    },

    {
      icon: <FaMicroscope />,
      title: "Biology",
      link: "#biology",
    },

    {
      icon: <FaAtom />,
      title: "Physics",
      link: "#physics",
    },

    {
      icon: <GiCrystalGrowth />,
      title: "Geology",
      link: "#geology",
    },

  ];

  return (

    <section className="category-showcase">

      <div className="category-header">

        <h2>
          Browse By Category
        </h2>

        <p>
          Explore our laboratory products
          by scientific discipline.
        </p>

      </div>

      <div className="category-grid">

        {categories.map(
          (category, index) => (

            <a
              key={index}
              href={category.link}
              className="category-card"
            >

              <div className="category-icon">

                {category.icon}

              </div>

              <h3>
                {category.title}
              </h3>

            </a>

          )
        )}

      </div>

    </section>

  );

}