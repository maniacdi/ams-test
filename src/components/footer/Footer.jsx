import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./Footer.scss";
/* Component for the footer*/
const Footer = () => {
  return (
    <div className="footer">
      <h3>Esperamos volver a verte</h3>
      <p>Visita nuestras redes</p>
      <div className="icons">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter className="twitter icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram className="instagram icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
