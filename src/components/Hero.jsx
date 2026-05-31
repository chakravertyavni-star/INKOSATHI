import "../styles/Hero.css";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

export default function Hero() {

  const slides = [

    {
      image: "/bg-image.jpg",
      title: "DISCOVER THE BEAUTY OF KOREA",
      text:
        "Plan your next adventure with Inkosathi Global Connect Private Limited — from vibrant Seoul to serene Jeju Island.",
    },

    {
      image: "/bg1-image.jpg",
      title: "DISCOVER THE BEAUTY OF INDIA",
      text:
        "Plan your next adventure with Inkosathi Global Connect Private Limited — from vibrant Varanasi to Himalayas.",
    },

    {
      image: "/bg2-image.jpg",
      title:
        "LEARN KOREAN BUILD YOUR FUTURE TRAVEL THE WORLD",
      text:
        "Master Korean with expert guidance, get personalized consultancy for your career or studies, and explore exciting tour & travel opportunities — all in one place.",
    },

    {
      image: "/bg3-image.jpg",
      title:
        "STUDY WORK & LIVE IN KOREA",
      text:
        "We help you prepare for TOPIK, apply to Korean universities, and connect with job opportunities across industries.",
    },

  ];

  const [current, setCurrent] = useState(0);

  /* AUTO SLIDER */

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrent(
        (prev) =>
          (prev + 1) % slides.length
      );

    }, 5500);

    return () => clearInterval(slider);

  }, [slides.length]);

  /* NEXT */

  const nextSlide = () => {

    setCurrent(
      (prev) =>
        (prev + 1) % slides.length
    );

  };

  /* PREVIOUS */

  const prevSlide = () => {

    setCurrent(
      (prev) =>
        prev === 0
          ? slides.length - 1
          : prev - 1
    );

  };

  return (

    <section
      className="hero"
      style={{
        backgroundImage:
          `url(${slides[current].image})`,
      }}
    >

      <div className="hero-overlay"></div>

      {/* LEFT ARROW */}

      <button
        className="slider-arrow left"
        onClick={prevSlide}
      >
        <HiChevronLeft />
      </button>

      {/* RIGHT ARROW */}

      <button
        className="slider-arrow right"
        onClick={nextSlide}
      >
        <HiChevronRight />
      </button>

      {/* CONTENT */}

      <div className="hero-content">

         <span className="hero-tag">
        CONNECTING KOREA WITH OPPORTUNITY
        </span>

        <h1>
        {slides[current].title}
        </h1>

        <p>
          {slides[current].text}
        </p>

         <div className="hero-buttons">

        <button className="hero-btn">
            Explore More
        </button>

        <button className="hero-btn secondary">
            About Us
        </button>

        </div>

        {/* DOTS */}

        <div className="slider-dots">

          {slides.map((_, index) => (

            <span
              key={index}
              onClick={() =>
                setCurrent(index)
              }
              className={
                current === index
                  ? "dot active"
                  : "dot"
              }
            />

          ))}

        </div>

      </div>

    </section>

  );
}