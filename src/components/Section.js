import React from "react";
import SectionTitle from './SectionTitle';
import "./css/Section.css";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <SectionTitle
        upper_text="Quem somos "
        lower_text="Nós"
        upper_dark={false}
        lower_dark={true}
        lower_light={false}
      />
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}