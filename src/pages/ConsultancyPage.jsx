import Navbar from "../components/Navbar";
import ConsultancyHero from "../components/ConsultancyHero";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import ConsultancyFeatures from "../components/ConsultancyFeatures";

export default function ConsultancyPage() {
  return (
    <>
      <Navbar />
      <ConsultancyHero />
      <ConsultancyFeatures />
      <Partners />
      <Footer />
    </>
  );
}