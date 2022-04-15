import React, { Component } from "react";

import { Navbar, Header } from "./container";
import { ThemeProvider, ThemeSetter } from "./components/theme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider>
        <Navbar element={<ThemeSetter />} />
        <Header />
      </ThemeProvider>
    );
  }
}

export default App;
