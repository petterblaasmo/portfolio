import React from "react";
import PropTypes from "prop-types";
import {
  IconBookmark,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconStar,
  IconTwitter,
} from "../icons";

const Icon = ({ name }) => {
  switch (name) {
    case "Bookmark":
      return <IconBookmark />;
    case "External":
      return <IconExternal />;
    case "Folder":
      return <IconFolder />;
    case "Github":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Star":
      return <IconStar />;
    case "Twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
