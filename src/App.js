import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

//component
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./globalStyle/global.styled";

//pages
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
