import React from "react";
import './App.css';
import './Assets/Css/css-main.min.css';
import './Assets/Css/style-main.css';
import './Assets/Css/style-main-two.css';
import './Assets/Css/Style.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { About } from "./Components/About";
import { Pricing } from "./Components/Pricings";
import { Blocks } from "./Components/Blocks";
import { Blog } from "./Components/Blog";
import { Contact } from "./Components/Contact";

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
          <Route path="/cources" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
