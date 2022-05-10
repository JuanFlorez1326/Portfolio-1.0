import "./Footer.css"
import React from "react"
import { BsMouse } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

export const  Footer = () => {
  return (
    <div id="footer" className="container footer-container">

      <h1>That's all<a href="#home"><h2><BsMouse /> - Scroll Up -</h2></a></h1>
      <div className="social-links">
        <a href="https://www.instagram.com/juanflorez13/" target='_blank' rel='noopener noreferrer'><BsInstagram className="social" /></a>
        <a href="https://www.facebook.com/juanflorez13/" target='_blank' rel='noopener noreferrer'><FaFacebookF className="social" /></a>
        <a href="https://www.linkedin.com/in/juanflorez1326/" target='_blank' rel='noopener noreferrer'><BsLinkedin className="social" /></a>
        <a href="https://github.com/JuanFlorez1326" target='_blank' rel='noopener noreferrer'><BsGithub className="social" /></a>
      </div>

    </div>
  )
}