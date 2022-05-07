import "./button.css"
import React from "react"

export const  Buttons = () => {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">Learn more</a>
      <a href="#contact" className="btn sec">Get in Touch</a>
    </div>
  )
}