import "./Home.scss";
import React from "react";
import { Information } from "../../components";
import { Wrapper } from "../../lib/wrapper";

const Home = () => {
  return (
    <>
      <div className="container">
        <p className="suddle">Hi, I'm</p>
        <h1 className="name">Petter Blåsmo</h1>
        <h1 className="header">I turn ideas into reality</h1>
        <p className="info-text">
          I am a web developer who strives to make my clients happy and
          satisfied with my work; I currently do freelance work while studying
          at university.
        </p>
        <button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Read my resume
          </a>
        </button>
      </div>
      <Information />
    </>
  );
};

export default Wrapper(Home, "home");
