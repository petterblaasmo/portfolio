import "./Socials.scss";
import { SocialIcons } from "../../config";
import { Tooltip } from "../../lib/functions";
import { Icon } from "../../lib/icons";

const Socials = () => {
  return (
    <ul className="socials">
      {SocialIcons.map((icon, index) => {
        return (
          <>
            <li key={icon.name + index}>
              <a
                className="exclude"
                href={icon.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={icon.name} />
              </a>

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
