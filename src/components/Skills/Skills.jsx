import "./Skills.css"
import React from "react"

export const Skills = () => {
  return (
    <div>
      <span className="quali-text">My Skills</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>HTML</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>CSS</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>JavaScript</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>Flask</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>React</h1>
        </div>
        <div className="qualification">
          <div className="content python"></div>
          <h1>Python</h1>
        </div>
        <div className="qualification">
          <div className="content c-sharp"></div>
          <h1>C#</h1>
        </div>
        <div className="qualification">
          <div className="content kotlin"></div>
          <h1>Kotlin</h1>
        </div>
      </div>
    </div>
  )
}