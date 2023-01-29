import React from "react";
import "./sponsors.css";
import Dior from './images/Dior.png'
import versace from './images/versace.png'
import Gucci from './images/Gucci.png'
import channel from './images/channel.png'

export default function Sponsors() {
  return (
    <section id="sponsors--section">
      <h1 id="sponsor--text">Sponsors</h1>
      <div className="sponsor-icon">
            <img src={versace} alt="Versace Icon" />
            <img src={Dior} alt="Dior Icon" />
            <img src={Gucci} alt="Gucci-icon" />
            <img src={channel} alt="Channel Icon" />
      </div>
      <h1 id="sponsor--text">Partners</h1>
      <div className="sponsor-icon">
            <img src={versace} alt="Versace Icon" />
            <img src={Dior} alt="Dior Icon" />
            <img src={Gucci} alt="Gucci-icon" />
            <img src={channel} alt="Channel Icon" />
      </div>
    </section>
  );
}
