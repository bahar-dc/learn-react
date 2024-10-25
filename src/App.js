import React from "react";
import './App.css';
import './Assets/Css/css-main.min.css';
import './Assets/Css/style-main.css';
import './Assets/Css/style-main-two.css';
import './Assets/Css/Style.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HomePage } from "./Components/HomePage";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Twocolumntext } from "./Components/Twocolumn";
import { Learning } from "./Components/Learning";
import { FullWidthScrollImage } from "./Components/FullWidthScrollImage";
import { StickyWIthText } from "./Components/StickyWIthText";
import { Logolist } from "./Components/Logolist";
import { Faqs } from "./Components/Faqs";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <Twocolumntext />
      <Learning />
      <FullWidthScrollImage />
      <StickyWIthText />
      <Logolist />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
