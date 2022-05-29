import "./Projects.css"
import React from "react"

export const Projects = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Small Personal Projects</h1>
      
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Tasks</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://tasks-jsx.netlify.app/" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Rick And Morty</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://api-rick-and-morty-search.netlify.app" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Anime Market</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://anime-market.netlify.app" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Software Quality</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="https://software-quality.netlify.app/" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>
    </div>
  )
}