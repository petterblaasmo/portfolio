import "./Toolbar.scss";
import React from "react";
import { Items } from "../../config";
import {
  UilEstate,
  UilUser,
  UilSuitcase,
  UilBookOpen,
  UilMessage,
} from "@iconscout/react-unicons";

const ItemArray = ["home", ...Items];
const ItemsIcons = [UilEstate, UilUser, UilSuitcase, UilBookOpen, UilMessage];

const Toolbar = () => {
  return (
    <ul className="toolbar">
      {ItemsIcons.map((Item, i) => (
        <li>
          <a className="exclude" href={`#${ItemArray[i].toLowerCase()}`}>
            <Item />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Toolbar;
