import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import FAQ from "./components/FAQ";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Specialties from "./components/Specialties";
import Intro from "./components/Intro";

import React, { useState } from "react";

export default function App() {
  return (
    <>
      <Header  />
      <Hero  />
      <About  />

      <Specialties  />
      <Intro  />

      <FAQ  />
      <Background  />
      <Contact  />
      <Footer  />
    </>
  );
}
