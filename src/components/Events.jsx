import "../styles/Events.css";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
   
];

export default function Events(){

  const [current,setCurrent] = useState(0);
  useEffect(()=>{

    const interval = setInterval(()=>{

      setCurrent(
        prev =>
        (prev + 1) % images.length
      );

    },2500);

    return ()=> clearInterval(interval);

  },[]);

  const next = () =>{
    setCurrent(
      (prev)=>
      (prev+1)%images.length
    );
  };

  const prev = () =>{
    setCurrent(
      (prev)=>
      (prev-1+images.length)%images.length
    );
  };

  return(

    <section
      className="events-section"
      style={{
        backgroundImage:
        "url('/bg.png')"
      }}
    >

      <div className="events-overlay"></div>

      <h2>Our Events</h2>

      <div className="events-slider">

        <button
        className="events-arrow left"
        onClick={prev}>
          <FiChevronLeft/>
        </button>

        {images.map((img,index)=>{

          let position =
          index-current;

          if(position < 0)
          position += images.length;

          return(

            <div
            key={index}
            className={`event-card ${
              position===0
              ? "active"
              : position===1
              ? "next"
              : position===images.length-1
              ? "prev"
              : "hidden"
            }`}
            >

              <img
              src={img}
              alt=""
              />

            </div>

          );

        })}

        <button
        className="events-arrow right"
        onClick={next}>
          <FiChevronRight/>
        </button>

      </div>

    </section>

  );
}