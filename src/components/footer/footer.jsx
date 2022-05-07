import "./footer.css"
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
        <a href="www.google.com"><BsInstagram className="social" /></a>
        <a href="www.google.com"><FaFacebookF className="social" /></a>
        <a href="www.google.com"><BsLinkedin className="social" /></a>
        <a href="www.google.com"><BsGithub className="social" /></a>
      </div>

    </div>
  )
}