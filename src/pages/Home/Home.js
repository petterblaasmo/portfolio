import "./Home.scss";
import React, { useState } from "react";
import { Information } from "../../components";
import { Wrapper } from "../../lib/wrapper";
import { motion } from "framer-motion";

const Home = () => {
  const figures = [
    { right: 50, top: 200, width: 25 },
    { right: 30, top: 100, width: 100 },
    { right: 40, top: 500, width: 30 },
    { right: 10, top: 400, width: 150 },
    { right: 15, top: 225, width: 35 },
  ];
  const RenderFigures = () => {
    const [scroll, setScroll] = useState(0);
    window.addEventListener("scroll", (e) =>
      setScroll(e.target.scrollingElement.scrollTop)
    );

    return (
      <>
        <div className="figure figure-big"></div>
        <motion.div className="figures">
          {figures.map((figure, i) => {
            return (
              <div
                key={i}
                className="figure"
                style={{
                  left: figure.left ? figure.left + "%" : null,
                  right: figure.right ? figure.right + "%" : null,
                  bottom: figure.bottom ? figure.bottom : null,
                  width: figure.width ? figure.width : null,
                  aspectRatio: "1/1",
                  top: figure.top - scroll,
                  transform: `rotate(45deg)`,
                  transition: "all .2s",
                }}
              ></div>
            );
          })}
        </motion.div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <RenderFigures />
        <p className="suddle monospace">Hi, I'm</p>
        <h1 className="name">Petter Blåsmo</h1>
        <h1 className="header">I turn ideas into reality</h1>
        <p className="info-text">
          I am a web developer who strives to make my clients happy and
          satisfied with my work; I currently do freelance work while studying
          at university.
        </p>
        <a
          className="exclude"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="monospace">Read my resume</button>
        </a>
      </div>
      <Information />
    </>
  );
};

export default Wrapper(Home, "home");
