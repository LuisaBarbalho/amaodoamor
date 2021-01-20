import React from "react";
import "./css/PhotoCard.css";

export default function PhotoCard({ img_path, name }) {
  var imgStyle = {
    backgroundImage: "url(" + img_path + ")",
  };
  return (
    <div style={imgStyle} className="photo-card">
      <div className="pc-text-container">
        <div className="pc-text-box">
          <div className="pc-text">
            {name}
            <hr className="pc-line"></hr>
          </div>
        </div>
      </div>
    </div>
  );
}
