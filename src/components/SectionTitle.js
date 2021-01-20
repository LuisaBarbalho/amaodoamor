import React from "react";
import "./css/SectionTitle.css";

function lowerTextStyle (dark, light) {
    if (dark) {
        return "lower-dark"
    }
    else if (light) {
        return "lower-light"
    }
    else {
        return "lower-darker"
    }
}

export default function SectionTitle({ upper_text, lower_text, upper_dark, lower_dark, lower_light, id }) {
  return (
    <div className="title">
      <div className="title-content">
        <div id={ (upper_dark ? "upper-dark" : "upper-light") }>{upper_text}</div>
        <div className="lower">
            <div id={ lowerTextStyle(lower_dark, lower_light) }>{lower_text}</div>
        </div>
        <div className="box-container" id={id}>
            <div className="box"></div>
        </div>
        
      </div>
    </div>
  );
}

/*
<div className="box"></div>*/