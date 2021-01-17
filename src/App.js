import React, {useState} from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SilderData";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Hero slides={SliderData} />
      <DropDown isOpen={isOpen} toggle={toggle}/>
    </>
  );
}

export default App;
