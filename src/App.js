import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Experience, Projects } from "./pages";
import { Navbar, Socials } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Socials />
      </>
    );
  }
}

export default App;
