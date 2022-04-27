import React, { Component } from "react";

import { Navbar, Header, Pagination } from "./container";
import { ThemeProvider, ThemeSetter } from "./components/theme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider>
        <Pagination />
        <Navbar element={<ThemeSetter />} />
        <Header />
      </ThemeProvider>
    );
  }
}

export default App;
