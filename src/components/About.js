import React from "react";
import SectionTitle from "./SectionTitle";
import "./css/About.css";
import image from "../assets/images/about/avatars-logo.png";

export default function About({ id }) {
  return (
    <div className="about" id={id}>
      <SectionTitle
        id={id}
        upper_text="Quem somos "
        lower_text="Nós"
        upper_dark={false}
        lower_dark={true}
        lower_light={false}
      />
      <div className="about-content">
        <img className="avatars-logo" src={image}></img>
        <div className="text">
          <div className="text-title">A mão do amor</div>

          <div className="title-box-container">
            <div className="title-box"></div>
          </div>
          <p className="text-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            nemo, totam dolor, qui numquam placeat eaque praesentium recusandae
            molestiae delectus dolorem iusto accusamus perspiciatis distinctio
            perferendis officia corrupti quo laborum. Aliquid, amet totam
            excepturi natus repellat ullam incidunt odit impedit consequuntur?
            Blanditiis vel, maxime ratione quod minus ipsum architecto molestiae
            consequuntur corporis itaque. Doloremque laudantium vel hic
            sapiente! Qui esse maiores expedita aperiam debitis laboriosam
            aliquam? Non natus, veniam fugit inventore quidem amet aperiam
            possimus asperiores aliquid provident? Molestiae dignissimos numquam
            quo doloribus voluptate aliquid exercitationem, ex minima commodi
            mollitia dolores ipsum aperiam perspiciatis veniam ipsa? Perferendis
            necessitatibus, ipsa optio quidem eligendi ad consectetur
            exercitationem doloremque deserunt fugit odit pariatur accusamus
            error dolore animi at unde ducimus expedita magni provident omnis
            suscipit. Ratione beatae a repudiandae quam voluptates recusandae
            suscipit quasi nesciunt repellendus, amet debitis incidunt quibusdam
            officia hic delectus culpa voluptatem dolorem! Maxime necessitatibus
            officiis inventore corrupti? Qui, voluptatibus!
          </p>
        </div>
      </div>
    </div>
  );
}
