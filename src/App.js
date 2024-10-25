import React from "react";
import './App.css';
import './Assets/Css/css-main.min.css';
import './Assets/Css/style-main.css';
import './Assets/Css/style-main-two.css';
import './Assets/Css/Style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/HomePage";

function App() {
  return (
    <>
     <HomePage />
    </>
  );
}

export default App;
