import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./css/Button.css";

export default function Button({ text, path, dark }) {
  return (
    <div className="container">
      <Link
        className={"btn" + (dark ? " btn-dark" : "btn-light")}
        to={path}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {text}
      </Link>
    </div>
  );
}
