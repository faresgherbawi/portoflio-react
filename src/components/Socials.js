import React, { useContext } from "react";

// import icon
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

// import cursor context
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="http://facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://instaagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="http://youtube.com" target="_blank">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;