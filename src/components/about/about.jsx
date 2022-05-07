import "./about.css"
import React from "react"
import { Qualifications } from "../qualifications/qualifications"

export const About = () => {
  return (
    <div id="about" className="container about-container">
      <Qualifications />
    </div>
  );
}