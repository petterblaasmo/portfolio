import "./Projects.scss";
import React, { Component } from "react";
import { Wrapper } from "../../lib/wrapper";
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
    return;
  }
}

export default Wrapper(Projects, "projects");
