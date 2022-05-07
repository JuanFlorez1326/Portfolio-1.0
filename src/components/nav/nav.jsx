import "./nav.css";
import React from "react"

import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { TiGroupOutline } from "react-icons/ti"
import { BiMessageRoundedDots } from "react-icons/bi"
import { BsArrowDownCircle } from "react-icons/bs"

export const Navbar = () => {
  return (
    <div className="navigation">
      <a href="#home"><AiOutlineHome className="icon active-nav" /></a>
      <a href="#about"><AiOutlineUser className="icon" /></a>
      <a href="#members"><TiGroupOutline className="icon" /></a>
      <a href="#contact"><BiMessageRoundedDots className="icon" /></a>
      <a href="#footer"><BsArrowDownCircle className="icon" /></a>
    </div>
  )
}