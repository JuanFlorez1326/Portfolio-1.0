import React from "react"

import { Header } from "./components/Header/header"
import { Home } from "./components/Home/Home"
import { About } from './components/AboutMe/about'
import { Contact } from "./components/ContactMe/contact"
import { Navbar } from "../src/components/nav/nav"
import { Members } from "../src/components/members/members"
import { Footer } from "./components/Footer/footer"

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}
export default App;