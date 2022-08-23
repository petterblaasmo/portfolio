import React, { Component } from "react";
import { Home, About, Experience, Projects, Skills, Contact } from "./pages";
import { Navbar, Socials, Footer, Toolbar } from "./components";

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
        <Socials />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Toolbar />
      </>
    );
  }
}

export default App;
