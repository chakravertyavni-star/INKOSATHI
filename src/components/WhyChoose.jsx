import "../styles/WhyChoose.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineGlobeAsiaAustralia
} from "react-icons/hi2";

export default function WhyChoose() {

  const cards = [

    {
      icon:<HiOutlineAcademicCap />,
      title:"Learn Korean with Confidence",
      text:"From beginner to advanced levels — immersive language education designed for real communication.",
    },

    {
      icon:<HiOutlineBriefcase />,
      title:"Career & Study Guidance",
      text:"Expert consultancy for universities, higher studies, and international opportunities.",
    },

    {
      icon:<HiOutlineGlobeAsiaAustralia />,
      title:"Travel & Cultural Access",
      text:"Experience Korea beyond tourism through guided cultural and travel programs.",
    },

  ];

  return (

    <section className="why">

      <div className="why-left">

        <span className="why-tag">
          WHY INKOSATHI
        </span>

        <h2>
          A Gateway To <br />
          Korea & Beyond
        </h2>

        <p>
          Premium language learning,
          trusted consultancy,
          and meaningful global
          opportunities — thoughtfully
          designed for your future.
        </p>

      </div>

      <div className="why-right">

        {cards.map((card,index)=>(

          <div
            className="why-card"
            key={index}
          >

            <div className="why-icon">
              {card.icon}
            </div>

            <h3>
              {card.title}
            </h3>

            <p>
              {card.text}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}