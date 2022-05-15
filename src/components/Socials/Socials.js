import "./Socials.scss";
import { SocialIcons } from "../../config";
import { Tooltip } from "../../lib/functions";

const Socials = () => {
  return (
    <ul className="socials">
      {SocialIcons.map((icon, index) => {
        return (
          <>
            <li key={icon.name + index}>
              <Tooltip
                text={`${icon.name[0].toUpperCase()}${icon.name.slice(1)}`}
                code={
                  <a href={icon.href} target="_blank" rel="noreferrer">
                    <i className={`fab fa-${icon.icon}`}></i>
                  </a>
                }
              />
              {/*<p className="social">{`${icon.name[0].toUpperCase()}${icon.name.slice(
                1
              )}`}</p>*/}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Socials;
