import "./Projects.css"
import React from "react"

export const Projects = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Small Personal Projects</h1>

      <div className="member">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Easy House Rent</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            This project was developed in React, Javascript, Socket.io, Cloudinary, 
            CSS in the frontend and in the backend with C# with .NET, Swagger, MySQL database.
          </h4>
          <a href="https://easyhouserent.netlify.app/" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Rick And Morty</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Consumption of a Rick And Morty API that shows some cards of the characters, 
            locations and episodes, a project carried out in Angualar.
          </h4>
          <a href="https://rick-and-morty-angular-app.vercel.app" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>
    </div>
  )
}