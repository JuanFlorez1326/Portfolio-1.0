import React from "react"

import { Header } from "./components/header/header"
import { Home } from "./components/home/home"
import { About } from './components/AboutMe/about'
import { Contact } from "./components/ContactMe/contact"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Footer } from "./components/footer/footer"

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;