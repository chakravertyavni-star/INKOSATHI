import "../styles/ContentShowcase.css";
import { motion } from "framer-motion";

export default function ContentShowcase() {

        const sections = [

  {
    image:"/content.png",
    title:"Korean Language",
    text:"Explore Korean culture, language, and immersive programs.",
    button:"Learn Korean",
  },

  {
    image:"/content1.png",
    title:"Consultancy",
    text:"Get expert advice for education, careers, and international opportunities.",
    button:"Get Consultancy",
  },

  {
    image:"/content2.png",
    title:"Tour & Travel",
    text:"Discover exciting destinations with guided travel packages.",
    button:"Plan Your Trip",
  },

  {
    image:"/content3.png",
    title:"K-Products",
    text:"Explore curated Korean products and premium lifestyle experiences.",
    button:"Explore Products",
  },

  {
    image:"/content4.png",
    title:"About Us",
    text:"We are committed to bringing global learning and cultural exchange opportunities.",
    button:"Learn More",
  },

];

  return (

    <section className="showcase">

      {sections.map((item,index)=>(

        <motion.div
          className={
            index % 2 === 0
              ? "showcase-row"
              : "showcase-row reverse"
          }

          key={index}

          initial={{
            opacity:0,
            y:80
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true,
            amount:.25
          }}

          transition={{
            duration:.9
          }}
        >

          {/* IMAGE */}

          <motion.div
            className="showcase-image"

            whileHover={{
              scale:1.03
            }}
          >

            <img
              src={item.image}
              alt={item.title}
            />

          </motion.div>

          {/* CONTENT */}

          <div className="showcase-content">

            <span>
              INKOSATHI EXPERIENCE
            </span>

            <h2>
              {item.title}
            </h2>

            <p>
              {item.text}
            </p>

            <button>
              {item.button}
            </button>

          </div>

        </motion.div>

      ))}

    </section>
  );
}