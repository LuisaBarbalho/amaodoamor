import React from "react";
import SectionTitle from "./SectionTitle";
import PhotoCard from "./PhotoCard";

import "./css/Products.css";

import croche from "../assets/images/products/croche-head.png";
import macrame from "../assets/images/products/macrame-head.png";
import decoupage from "../assets/images/products/decoupage-head.png";
import diverse from "../assets/images/products/diverse-head.png";
import flower_pink from "../assets/images/products/flower-pink.svg";
import flower_yellow from "../assets/images/products/flower-yellow.svg";


export default function Products({ id }) {
  return (
    <div className="products" id={id}>
      <SectionTitle
        id={id}
        upper_text="Quais são nossos "
        lower_text="Produtos"
        upper_dark={false}
        lower_dark={true}
        lower_light={false}
      />
      <div className="products-container">
        <div className="products-cards">
          <div className="products-card" id="croche">
            <PhotoCard img_path={croche} name="Crochê" />
            <div className="products-box" id="p-b-left"></div>
          </div>
          <div className="products-card" id="macrame">
            <PhotoCard img_path={macrame} name="Macramê" />
          </div>
          <div className="products-card" id="decoupage">
            <PhotoCard img_path={decoupage} name="Decoupage" />
          </div>
          <div className="products-card" id="diverse">
            <PhotoCard img_path={diverse} name="Diversos" />
          </div>
          <div className="products-box" id="p-b-right"></div>
          <img className="products-box" id="img-flower-yellow" src={flower_yellow} />
        </div>
        <img className="products-box" id="img-flower-pink" src={flower_pink} />
      </div>
      
      
    </div>
  );
}
