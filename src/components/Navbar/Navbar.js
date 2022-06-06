import "./Navbar.scss";
import React from "react";
import { Items } from "../../config";
import logo from "../../lib/images/logo/logo-white.svg";

const Navbar = () => {
  const [scroll, setScroll] = React.useState(0);

  window.addEventListener("scroll", (e) => {
    setScroll(e.target.scrollingElement.scrollTop);
  });

  const ListItems = () => {
    return Items.map((item, i) => {
      return (
        <li key={i}>
          <a className="exclude monospace" href={`#${item.toLowerCase()}`}>
            <b>0{i + 1}.</b> {item}
          </a>
        </li>
      );
    });
  };

  return (
    <nav className={scroll > 0 ? "nav-box-shadow" : ""}>
      <div className="first" onClick={() => (window.location.href = "/")}>
        <img src={logo} alt="logo" />
      </div>
      <ul className="second">
        <ListItems />
        <a className="exclude" href="/resume.pdf">
          <button className="monospace small">Resume</button>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
