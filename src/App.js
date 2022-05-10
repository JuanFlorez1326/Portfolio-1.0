import React from "react"

import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { About } from './components/AboutMe/About'
import { Contact } from "./components/ContactMe/Contact"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Footer } from "./components/Footer/Footer"

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