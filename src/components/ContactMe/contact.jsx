import "./Contact.css"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

export const  Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="contact" target={"blank"}>
          <AiOutlineMail className="icon" />
          <h2>Email <span>Juanks339@gmail.com</span></h2>
        </a>

        <a href="https://wa.link/tq4xxg" className="contact whatsapp" target={"blank"}>
          <AiOutlineWhatsApp className="icon" />
          <h2>WhatsApp <span>+57 313 706 6248</span></h2>
        </a>

        <a href="https://www.instagram.com/juanflorez13/" className="contact instagram" target={"blank"}>
          <AiOutlineInstagram className="icon" />
          <h2>Instagram <span>JuanFlorez1326</span></h2>
        </a>
      </div>
    </div>
  )
}