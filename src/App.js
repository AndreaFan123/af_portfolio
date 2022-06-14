import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component
import {
  Header,
  Navbar,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./components";
//style
import { GlobalStyles } from "./globalStyle/global.styled";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Header />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
