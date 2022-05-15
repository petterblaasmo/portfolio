import "./About.scss";

import { Wrapper, Motion } from "../../lib/wrapper";
import { AboutInfo } from "../../config";

const About = () => {
  return (
    <>
      <div className="header">
        <h1>
          <b>Efficiency</b> 🚀 is <b>key</b> 🗝️
        </h1>
      </div>
      <ul className="items">
        {AboutInfo.map((x) => {
          return (
            <li className="item" key={x.title}>
              <img src={x.img} alt="img" />
              <h1>{x.title}</h1>
              {x.description}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Wrapper(Motion(About), "about");
