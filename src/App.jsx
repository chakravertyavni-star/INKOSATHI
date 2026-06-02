import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import KoreanLanguage from "./pages/KoreanLanguage";
import ConsultancyPage from "./pages/ConsultancyPage";
import TourTravelPage from "./pages/TourTravelPage";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/korean-language"
          element={<KoreanLanguage />}
        />

        <Route
          path="/consultancy"
          element={<ConsultancyPage />}
        />

        <Route
          path="/TourTravel"
          element={<TourTravelPage />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


      </Routes>

      
    </BrowserRouter>
  );
}

export default App;