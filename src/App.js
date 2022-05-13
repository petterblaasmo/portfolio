import React, { Component } from "react";
import { Home } from "./pages";
import { Navbar, Socials, Pagination } from "./components";

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
        <Pagination />
        <Socials />
      </>
    );
  }
}

export default App;
