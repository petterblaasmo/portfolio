import "./Projects.scss";
import React, { Component } from "react";
import { Wrapper, Motion } from "../../lib/wrapper";
import backend from "../../lib/images/backend.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      repos: [],
      loading: true,
    };
  }

  render() {
    console.log(this.state.repos);
    const handleClick = (num) => this.setState({ active: num });
    return (
      <div className="container">
        <div className="sort">
          <ul>
            <li
              onClick={() => handleClick(0)}
              className={this.state.active === 0 ? "active" : ""}
            >
              Discord
            </li>
            <li
              onClick={() => handleClick(1)}
              className={this.state.active === 1 ? "active" : ""}
            >
              Website
            </li>
          </ul>
        </div>
        <div className="projects">
          <div className="project">
            <div className="project-image">
              <img src={backend} alt="" />
              <p>Category</p>
            </div>
            <h1>Project</h1>
            <p>
              This is a short project description just to show how it will look
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Wrapper(Motion(Projects), "projects");
