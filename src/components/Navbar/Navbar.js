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
            {item}
          </a>
        </li>
      );
    });
  };

  return (
    <>
      <nav className={scroll > 0 ? "nav-box-shadow" : ""}>
        <div className="first" onClick={() => (window.location.href = "/")}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="second">
          <ListItems />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
