import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home
import Home from "./pages/Home/Home";

// About Me pages
import About from "./pages/About/About";
import Education from "./pages/About/Education";
import Experience from "./pages/About/Experience";

// Philosophies pages
import Philosophies from "./pages/Philosophies/Philosophies";
import IBelieve from "./pages/Philosophies/IBelieve";
import InspirationalQuotes from "./pages/Philosophies/InspirationalQuotes";

// Professional Learnings pages
import Autobiography from "./pages/ProfessionalLearnings/Autobiography";
import JourneyReconciliation from "./pages/ProfessionalLearnings/JourneyReconciliation";
import FieldExperiences from "./pages/ProfessionalLearnings/FieldExperiences";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <div className="pt-20"> 
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About Me */}
          <Route path="/about/me" element={<About />} />
          <Route path="/about/me/education" element={<Education />} />
          <Route path="/about/me/experience" element={<Experience />} />

          {/* Educational Philosophies */}
          <Route path="/philosophies/overview" element={<Philosophies />} />
          <Route path="/philosophies/i-believe" element={<IBelieve />} />
          <Route path="/philosophies/inspirational-quotes" element={<InspirationalQuotes />} />

          {/* Professional Learnings */}
          <Route path="/professional/learnings/autobiography" element={<Autobiography />} />
          <Route path="/professional/learnings/reconciliation" element={<JourneyReconciliation />} />
          <Route path="/professional/learnings/field-experiences" element={<FieldExperiences />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
