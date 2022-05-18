import "./Projects.scss";
import React, { Component } from "react";
import { Wrapper, Motion } from "../../lib/wrapper";
import backend from "../../lib/images/backend.jpg";
import { Markdown } from "./Markdown";
import ReactMarkdown from "react-markdown";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      loading: true,
      projects: [],
    };
  }

  async componentDidMount() {
    const projects = [];
    for (let i = 0; i < Markdown.length; i++) {
      const project = Markdown[i];
      const res = await fetch(project),
        text = await res.text();
      projects.push(text);
    }
    this.setState({ projects: projects });
  }

  render() {
    const handleClick = (num) => this.setState({ active: num });
    return (
      <div className="container">
        <div className="sort">
          <ul>
            <li
              onClick={() => handleClick(0)}
              className={this.state.active === 0 ? "active" : ""}
            >
              Website
            </li>
            <li
              onClick={() => handleClick(1)}
              className={this.state.active === 1 ? "active" : ""}
            >
              Discord
            </li>
          </ul>
        </div>
        <div className="projects">
          {this.state.projects.map((project) => {
            return (
              <div className="project">
                <ReactMarkdown children={project} />
              </div>
            );
            /*return (
              <div className="project">
                <div className="project-image">
                  <img src={backend} alt="" />
                  <p>Category</p>
                </div>
                <h1>Project</h1>
                <p>
                  This is a short project description just to show how it will
                  look
                </p>
              </div>
            );*/
          })}
        </div>
        <button className="projects-btn">See x more</button>
      </div>
    );
  }
}

export default Wrapper(Motion(Projects), "projects");
