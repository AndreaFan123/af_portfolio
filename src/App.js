import React from "react";

//component
import {
  Header,
  Navbar,
  Projects,
  Contact,
  Footer,
  Experience,
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
