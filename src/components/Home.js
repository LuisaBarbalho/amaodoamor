import React from "react";
import Button from "./Button";
import "./css/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="card">
        <div className="card-content">
          <h1 id="title">
            Aproximando as pessoas <br />
            através do trabalho manual
          </h1>
          <div className="line"></div>
          <p id="subtitle">
            Você que é artesão e admira outros trabalhos manuais, <br />
            vem conhecer a proposta da A mão do amor
          </p>
          <Button text="CLIQUE AQUI" dark={true} path="why" />
        </div>
      </div>
    </div>
  );
}

/*
<div className="btn">
            <a id="btn-dark" href="/">
                    CLIQUE AQUI
                </a>
          </div>

        */
