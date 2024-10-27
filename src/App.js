import React from "react";
import './App.css';
import './Assets/Css/css-main.min.css';
import './Assets/Css/style-main.css';
import './Assets/Css/style-main-two.css';
import './Assets/Css/Style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { About } from "./Components/About";
import { Pricing } from "./Components/Pricings";
import { Blocks } from "./Components/Blocks";
import { Blog } from "./Components/Blog";

function App() {
  return (
    <>

     <Router>
            <div className="App">
      <Routes>
        <Route path="/learn-react" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
            </div>
    </Router>
     
    </>
  );
}

export default App;
