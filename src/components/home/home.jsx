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
          Hello! I am Juan Florez, a passionate Full Stack Web Developer, my focus is on developing efficient and aesthetic web solutions, 
          using technologies such as Angular, NestJs, TypeScript, JavaScript, SCSS, HTML, CSS among other technologies. My ability to balance 
          functionality and design is reflected in projects ranging from small businesses to international companies. I excel in collaborative environments, 
          believing in the importance of effective communication for team success. My commitment is not only limited to functional code, but also to continuous 
          improvement and learning new technologies.
        </p>
      </h2>

      <Buttons />
    </div>
  )
}