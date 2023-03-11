import './home.css'
import React from 'react'
import img from '../../Images/img4.jpg'
import { Buttons } from '../button/button'
import { BsMouse } from 'react-icons/bs'

export const Home = () => {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <img src={img} alt='Me' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I am a junior programmer
          from Armenia - Quindio - Colombia.
          With motivation to continue perfecting
          my skills and grow professionally.
        </p>
      </h2>

      <Buttons />
    </div>
  )
}