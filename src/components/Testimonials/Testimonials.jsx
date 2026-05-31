import "./Testimonials.css";

export default function Testimonials() {

  const testimonials = [

    {
      text:
        "Reliable laboratory equipment and chemicals for educational and professional laboratories.",
    },

    {
      text:
        "Fast nationwide delivery with retail and bulk quantity options available.",
    },

    {
     text:
    "Customers benefit from free maintenance support and professional technical assistance when needed.",
    },

  ];

  return (

    <section className="testimonials">

      <div className="testimonials-header">

        <h2>
          Why Customers Choose Mettler
        </h2>

        <p>
          Providing quality laboratory solutions
          with professionalism and reliability.
        </p>

      </div>

      <div className="testimonials-grid">

        {testimonials.map(
          (item, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <div className="stars">

                ★★★★★

              </div>

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