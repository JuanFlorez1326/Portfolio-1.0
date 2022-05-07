import React from "react"

import { Header } from "../src/components/header/header"
import { Home } from "../src/components/home/home"
import { About } from '../src/components/about/about'
import { Contact } from "../src/components/contact/contact"
import { Navbar } from "../src/components/nav/nav"
import { Members } from "../src/components/members/members"
import { Footer } from "../src/components/footer/footer"

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