import "./Socials.scss";
import { SocialIcons } from "../../config";
import { Icon } from "../../lib/icons";

const Socials = () => {
  return (
    <ul className="socials">
      {SocialIcons.map((icon, index) => {
        return (
          <li key={icon.name + index}>
            <a
              className="exclude"
              href={icon.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={icon.name} />
            </a>
          </li>
        );
      })}
      <li className="line"></li>
    </ul>
  );
};

export default Socials;
