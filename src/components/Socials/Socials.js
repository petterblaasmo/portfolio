import "./Socials.scss";
import { SocialIcons } from "../../config";

const Socials = () => {
  return (
    <ul className="socials">
      {SocialIcons.map((icon) => {
        return (
          <>
            <li>
              <a href={icon.href}>
                <i className={`fab fa-${icon.icon}`}></i>
              </a>
              <p>{`${icon.name[0].toUpperCase()}${icon.name.slice(1)}`}</p>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Socials;
