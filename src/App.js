import React, { Component } from "react";
import { Home, About, Projects } from "./pages";
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
        <Projects />
        <Socials />
      </>
    );
  }
}

export default App;
