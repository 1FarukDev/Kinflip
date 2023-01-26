import React from "react";
import "./herostyle.css";
import heroimg from "./images/Hero/heroimage.png";
import hero from "./images/heroimg.png";
export default function Hero() {
  return (
    <div>
      <section>
        <div id="hero">
          <div className="hero-text">
            <h1>
              Future <span className="yellow">Fashion</span>
            </h1>
            <h1>
              Industry <span className="yellow">Conference</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              optio obcaecati rerum sunt facilis blanditiis doloribus laborum
              nemo possimus nisi?
            </p>
            <div id="register-1">
              <div id="nav-attendee">Register As An Attendee</div>
              <div id="nav-speaker">Register As A Speaker</div>
            </div>
          </div>
          <div className="hero-countdown">
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="heroimg">
          <img src={heroimg} alt="heroimage" className="heroimage" />
        </div>
      </section>
    </div>
  );
}
