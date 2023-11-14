import "./Skills.css"
import React from "react"

export const Skills = () => {
  return (
    <div>
      <span className="quali-text">My Skills</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content angular"></div>
          <h1>Angular</h1>
        </div>
        <div className="qualification">
          <div className="content nest"></div>
          <h1>NestJS</h1>
        </div>
        <div className="qualification">
          <div className="content ts"></div>
          <h1>TypeScript</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>React</h1>
        </div>
        <div className="qualification">
          <div className="content express"></div>
          <h1>Express</h1>
        </div>
        <div className="qualification">
          <div className="content csharp"></div>
          <h1>C-Sharp</h1>
        </div>
        <div className="qualification">
          <div className="content scss"></div>
          <h1>SCSS</h1>
        </div>
        <div className="qualification">
          <div className="content html"></div>
          <h1>HTML</h1>
        </div>
      </div>
    </div>
  )
}