import "./Stats.css";
import * as CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaAward,
  FaFlask,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";

const CountUp = CountUpModule.default?.default || CountUpModule.default;

export default function Stats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaAward />,
      number: 10,
      suffix: "+",
      title: "Years Experience",
    },
    {
      icon: <FaFlask />,
      number: 3500,
      suffix: "+",
      title: "Products",
    },
    {
      icon: <FaUsers />,
      number: 300,
      suffix: "+",
      title: "Institutions",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: 9,
      suffix: "+",
      title: "Regions",
    },
  ];

console.log("FaAward:", FaAward);
console.log("FaFlask:", FaFlask);
console.log("FaUsers:", FaUsers);
console.log("FaMapMarkedAlt:", FaMapMarkedAlt);
console.log("CountUp:", CountUp);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-container">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>
              {inView && (
                <CountUp
                  end={item.number}
                  duration={2}
                />
              )}
              {item.suffix}
            </h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>
    </section>
  );
}