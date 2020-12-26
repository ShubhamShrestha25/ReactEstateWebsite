import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SilderData";

function App() {
  return (
    <>
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
