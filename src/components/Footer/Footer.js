import "./Footer.scss";
import { Items } from "../../config";
import logo from "../../lib/images/logo/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="message">
        <div>
          <h1>Interested?</h1>
          <h1>Hire me today.</h1>
        </div>
        <button onClick={() => (window.location.href = "#contact")}>
          Contact me
        </button>
      </div>
      <div className="content">
        <a href="/" className="personal exclude">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          {Items.map((item) => (
            <li key={item}>
              <a className="exclude" href={"#" + item.toLowerCase()}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="copyright">
        <p>
          <i className="fas fa-copyright" /> 2021-{new Date().getFullYear()}{" "}
          <a href="/">petterblaasmo.com</a> | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
