import "./contact.css"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri";

export const  Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a href="mailto:juanks339@gmail.com" className="contact" target={"blank"}>
          <AiOutlineMail className="icon" />
          <h2>Email <span>Juanks339@gmail.com</span></h2>
        </a>

        <a href="https://wa.link/tq4xxg" className="contact whatsapp" target={"blank"}>
          <AiOutlineWhatsApp className="icon" />
          <h2>WhatsApp <span>+57 313 706 6248</span></h2>
        </a>

        <a href="https://www.linkedin.com/in/juanflorez1326" className="contact instagram" target={"blank"}>
          <RiLinkedinFill className="icon" />
          <h2>LinkedIn <span>JuanFlorez1326</span></h2>
        </a>
      </div>
    </div>
  )
}