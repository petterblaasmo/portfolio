import "./Navbar.scss";
import { useState } from "react";
import { Items } from "../../config";
import logo from "../../lib/images/logo/logo-white.svg";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const ListItems = () => {
    return Items.map((item, i) => {
      return (
        <li>
          <a href={`#${item.toLowerCase()}`}>{item}</a>
        </li>
      );
    });
  };

  return (
    <nav>
      <div className="first" onClick={() => (window.location.href = "/")}>
        <img src={logo} alt="logo" />
      </div>

      <div className="hamburger" onClick={() => setHamburger(!hamburger)}>
        <div
          className="top"
          style={{
            width: hamburger ? "20px" : null,
            transform: hamburger ? "rotate(45deg)" : null,
            marginBottom: hamburger ? "0" : null,
          }}
        ></div>
        <div
          className="bot"
          style={{
            width: hamburger ? "20px" : null,
            transform: hamburger ? "rotate(-45deg)" : null,
            marginTop: hamburger ? "-2px" : null,
          }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
