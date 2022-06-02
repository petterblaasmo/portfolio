import React, { Component } from "react";
import { motion } from "framer-motion";
import { Home, About, Experience, Projects } from "./pages";
import { Navbar, Socials } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Icon = () => {
      const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)",
        },
      };

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1815 1967.96"
        className="item"
      >
        <motion.path
          d="M1680.25,409.47l-42-24.26L1453.5,278.58l-208-120.12-18.71-10.8L1000,16.74,773.25,147.66l-18.71,10.8-208,120.12L361.79,385.21l-42,24.26L93,540.38V1590.53l226.75,130.92,42,24.26L546.5,1852.34l208,120.12,18.71,10.8V1455.5L883.43,1519,1000,1586.09,1116.57,1519l110.18-63.46L1452,1325.77V805.14L1226.75,675.42,1116.57,612,1000,544.83,883.43,612,773.25,675.42,548,805.14v487.07H546.5v290.84L434.59,1519l-113.35-64.89V1292.21h-1.49V838.71h1.49V676.85L434.59,612,546.5,547.87,773.25,418.06l57.37-32.85,169.38-97,169.38,97,57.37,32.85L1453.5,547.87,1565.41,612l113.35,64.89V838.71h1.49v453.5h-1.49v161.86L1565.41,1519l-111.91,64.09-226.75,129.81v270.4l18.71-10.8,208-120.12,184.71-106.63,42-24.26L1907,1590.53V540.38ZM773.91,1196V934.93l166.66-96.22L1000,804.4l59.43,34.31,166.66,96.22V1196l-166.66,96.22L1000,1326.52l-59.43-34.31Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>;
    };

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
