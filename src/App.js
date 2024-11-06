import React from "react";
import './App.css';
import './Assets/Css/css-main.min.css';
import './Assets/Css/style-main.css';
import './Assets/Css/style-main-two.css';
import './Assets/Css/Style.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { About } from "./Components/About";
import { Courses } from "./Components/Courses";
import { Pricing } from "./Components/Pricings";
import { Blocks } from "./Components/Blocks";
import { Blog } from "./Components/Blog";
import { Contact } from "./Components/Contact";
import { Enroll } from "./Components/Enroll";
// Courses
import { Ieltspreparation } from "./Components/IeltsPreparation";
// import { PteCoaching } from "./Components/PteCoaching";


import { NotFound } from "./Components/404";

function App() {
  return (
    <>
      <Router>
        <div className="App">
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blocks" element={<Blocks />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enroll />} />
          {/* courses */}
          <Route path="/ielts-preparation" element={<Ieltspreparation />} />
          <Route path="/celpip-training" element={<Enroll />} />
          <Route path="/pte-coaching" element={<Enroll />} />
          <Route path="/english-language-courses" element={<Enroll />} />
          <Route path="/public-speaking" element={<Enroll />} />
          <Route path="/everyday-english" element={<Enroll />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
