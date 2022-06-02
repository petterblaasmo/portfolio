import "./About.scss";
import selfie from "../../lib/images/selfie.jpg";
import { Wrapper } from "../../lib/wrapper";
import { List } from "../../lib/functions";

const About = () => {
  return (
    <>
      <div className="about-me">
        <h1 className="section-header">
          <b>01.</b>
          About me
          <hr />
        </h1>
        <p>
          Hello, I am Petter. I enjoy developing various applications for the
          web; I started my development journey back in 2018 when I got involved
          with a gaming community called{" "}
          <a href="https://powerfps.com" target="_blank" rel="norefferer">
            PowerFPS
          </a>{" "}
          - where I was looking into JavaScript and SourcePawn.
        </p>
        <p>
          Today I do freelance work for various clients I have worked with in
          the past; my main goal is to satisfy my clients by making them happy.
          Most of my clients come from{" "}
          <a href="https://upwork.com" target="_blank" rel="norefferer">
            Upwork
          </a>
          .
        </p>
        <p>Here are a few of the tools I use daily:</p>
        <div className="lists">
          <List array={["ES6 JavaScript", "React.JS"]} />
          <List array={["Express.JS", "MongoDB"]} />
        </div>
      </div>
      <img src={selfie} alt="" />
    </>
  );
};

export default Wrapper(About, "about");
